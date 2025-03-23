const { User } = require("../modules/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { where } = require("sequelize");

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll({
                attributes: ['id', 'email', 'name']
            });
            return res.status(200).json(users);
        } catch (error) {
            console.error("Error fetching users:", error);
            return res.status(500).send({ message: "Internal server error" });
        }
    },

    register: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
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
            return res.status(500).send({ message: "Internal server error" });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
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




// getuserbyid:async (req,res) => {
//     const {id}=req.parms 
//     try {
//         const user=await User.findOne({where:{id}}) 
//         res.json(user)
//     } catch (error) {
//         console.log("err",error);
        
//     }
    
// },

      forgetpass :async (req, res) => {
        const { email } = req.body;
        try {
          // Correct query with a where clause
          const user = await User.findOne({ where: { email } });
          if (!user) {
            return res.status(404).json({ message: "User not found" });
          }
      
          // Generate reset token and save it
          const resetToken = crypto.randomBytes(20).toString("hex");
          user.resetPasswordToken = resetToken;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
          await user.save();
      
          // Generate the reset link
          const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
          res.status(200).json({ resetLink, message: "Reset link generated successfully" });
        } catch (err) {
          console.error("Error in forgot-password:", err);
          res.status(500).json({ message: "Failed to generate reset link" });
        }
      },

   Resetpass: async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
  
    try {
      const user = await User.findOne({ 
        where:{
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() },
        }
      });
  
      if (!user) {
        return res.status(400).json({ message: "Invalid or expired token" });
      }
  
      user.password = password; // Hash the password before saving in a real app
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      await user.save();
  
      res.status(200).json({ message: "Password reset successfully" });
    } catch (err) {
      res.status(500).json({ message: "Failed to reset password" });
    }
  
}


}



