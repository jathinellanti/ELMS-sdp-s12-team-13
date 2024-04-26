const express = require('express');
const loginrouter = express.Router();
const LoginModel = require('../models/login');
const AdminModel = require('../models/AdminMain')

// Route for handling login inputs and inserting into MongoDB Atlas
loginrouter.post('/login', async (req, res) => {
    try {
        const { email, password, role } = req.body;
        // Create a new login document with the provided data
        const newLogin = new LoginModel({
            email,
            password,
            role
        });
        // Save the new login to the database
        await newLogin.save();
        res.status(201).json({ message: "Login data inserted successfully" });
    } catch (error) {
        console.error('Error inserting login data:', error);
        res.status(500).json({ error: "Error inserting login data", message: error.message });
    }
});


loginrouter.post("/adminlogin", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await AdminModel.findOne({ username: username });
        
        if (!user) {
            // User not found
            return res.status(401).json({ message: "Invalid username or password" });
        }
        
        if (password === user.password) {
            // Correct password
            res.status(200).json({ message: "Login Success" });
        } else {
            // Incorrect password
            res.status(401).json({ message: "Invalid username or password" });
        }
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = loginrouter;
