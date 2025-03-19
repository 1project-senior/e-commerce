const { User } = require("../modules/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
            const { email, name, password } = req.body;

            if (!email || !name || !password) {
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
                name
            });

            return res.status(201).send({
                message: "Registration successful",
                user: {
                    id: newUser.id,
                    email: newUser.email,
                    name: newUser.name
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
};





// const { User } = require("../modules/database")
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")


// module.exports = {
// getAlluser:async (req,res) => {
//     try {
//         const users= await User.findAll(

//         ) 
//         res.json(users)
//     } catch (error) {
        
//         console.log("err" , error);
        
//     }
// },
//     register: async (req, res) => {
//         try {
//             const { email, name, password } = req.body

//             if (!email || !name || !password) {
//                 return res.status(400).send({ message: "All fields are required" })
//             }

//             const existingUser = await User.findOne({ where: { email } })
//             if (existingUser) {
//                 return res.status(400).send({ message: "User already exists" })
//             }

//             const hashedPassword = await bcrypt.hash(password, 10)
//             const newUser = await User.create({
//                 email,
//                 password: hashedPassword,
//                 name
//             })

       
//             const userResponse = {
//                 id: newUser.id,
//                 email: newUser.email,
//                 name: newUser.name
//             }

//             return res.status(201).send({
//                 message: "Registration successful",
//                 user: userResponse
//             })

//         } catch (error) {
//             console.error("Registration error:", error)
//             return res.status(500).send({ message: "Internal server error" })
//         }
//     },

//     login: async (req, res) => {
//         try {
//             const { email, password } = req.body

         
//             if (!email || !password) {
//                 return res.status(400).send({ message: "Email and password are required" })
//             }

//             const user = await User.findOne({ 
//                 where: { email },
//                 attributes: ['id', 'email', 'name', 'password'] 
//             })

//             if (!user) {
//                 return res.status(404).send({ message: "Invalid credentials" })
//             }

//             const validPassword = await bcrypt.compare(password, user.password)
//             if (!validPassword) {
//                 return res.status(401).send({ message: "Invalid credentials" })
//             }

//             const token = jwt.sign(
//                 { id: user.id }, 
//                 process.env.JWT_SECRET || "1234", 
//                 { expiresIn: "7d" }
//             )

          
//             const userResponse = {
//                 id: user.id,
//                 email: user.email,
//                 name: user.name
//             }

//             return res.status(200).send({
//                 message: "Login successful",
//                 user: userResponse,
//                 token
//             })

//         } catch (error) {
//             console.error("Login error:", error)
//             return res.status(500).send({ message: "Internal server error" })
//         }
//     },






    
// }
