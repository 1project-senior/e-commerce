const { User } = require("../modules/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateResetToken }= require ("../Utils/sendEmail")
const nodemailer =require ("nodemailer");



module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll({
                
            });
            return res.status(200).json(users);
        } catch (error) {
            console.error("Error fetching users:", error);
            return res.status(500).send({ message: "Internal server error" });
        }
    },

    register: async (req, res) => {
        try {
        
            const { email, password,name } = req.body;

            if (!email || !password || !name) {
                return res.status(400).send({ message: "All fields are required" });
            }

            // Ensure email is treated in lowercase to prevent case-sensitive duplication
            const normalizedEmail = email.toLowerCase();
            const existingUser = await User.findOne({ where: { email: normalizedEmail } });

            if (existingUser) {
                return res.status(400).send({ message: "User already exists" });
            }

            // Ensure password is treated as a string
            const hashedPassword = await bcrypt.hash(String(password), 10);

            const newUser = await User.create({
                email: normalizedEmail,
                password: hashedPassword,
                name:name,
               
                name:name
                
            });

            return res.status(201).send({
                message: "Registration successful",
                user: {
                    id: newUser.id,
                    email: newUser.email,
                   
                }
            });

        } catch (error) {
            console.error("Registration error:", error);
            return res.status(500).send(error);
        }
    },

    login: async (req, res) => {
        try {
            const { email, password ,name} = req.body;

            if (!email || !password || !name) {
                return res.status(400).send({ message: "Email and password are required" });
            }

            const normalizedEmail = email.toLowerCase();
            const user = await User.findOne({ 
                where: { email: normalizedEmail },
                attributes: ['id', 'email', 'name', 'password'] 
            });

            if (!user) {
                return res.status(404).send({ message: "Invalid credentials" });
            }

            const validPassword = await bcrypt.compare(String(password), user.password);
            if (!validPassword) {
                return res.status(401).send({ message: "Invalid credentials" });
            }

            const token = jwt.sign(
                { id: user.id }, 
                process.env.JWT_SECRET || "yourSecretKey", 
                { expiresIn: "7d" }
            );

            return res.status(200).send({
                message: "Login successful",
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name
                },
                token
            });

        } catch (error) {
            console.error("Login error:", error);
            return res.status(500).send({ message: "Internal server error" });
        }
    },
    forgotPassword: async (req, res) => {
      const { email } = req.body;
  
      try {
          if (!process.env.JWT_SECRET) {
              throw new Error('JWT_SECRET is not defined in environment variables');
          }
          console.log("JWT_SECRET:", process.env.JWT_SECRET);

  
          const user = await User.findOne({ where: { email } });
          if (!user) {
              return res.status(404).json({ message: "User not found" });
          }
  
          const resetToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
          const resetUrl = `http://localhost:3001/reset-password?token=${resetToken}`;
          console.log("Reset URL:", resetUrl);  // Debugging
  
          const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                  user: process.env.EMAIL_USER,
                  pass: process.env.EMAIL_PASS,
              },
          });
  
          const mailOptions = {
              from: process.env.EMAIL_USER,
              to: email,
              subject: 'Password Reset Request',
              html: `<p>Click this <a href="${resetUrl}">link</a> to reset your password.</p>`,
          };
  
          await transporter.sendMail(mailOptions);
          res.json({ success: true, message: "Password reset link sent to email" });
  
      } catch (error) {
          console.error('Forgot Password Error:', error);
          res.status(500).json({ message: "Error processing request", error: error.message });
      }
  },
  resetPassword: async (req, res) => {
      const { token, newPassword } = req.body;

      try {
          // Verify the token
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          const user = await User.findByPk(decoded.userId);
          if (!user) {
              return res.status(404).json({ message: "User not found" });
          }

          // Update the password
          user.password = await bcrypt.hash(newPassword, 10);
          await user.save();

          res.json({ success: true, message: "Password reset successfully" });
      } catch (error) {
          console.error('Error resetting password:', error);
          res.status(400).json({ message: "Invalid or expired token" });
      }
  },
  
getuserbyid:async (req,res) => {
    try {
        const user=await User.findOne({where:{ id: req.params.id}}) 
        res.json(user)
    } catch (error) {
        console.log("err",error);
        
    }
}
}



