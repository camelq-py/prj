const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // User model

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Signup Route (no password hashing)
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newUser = new User({ username, email, password }); // Store password in plain text
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

// Login Route (check if username/email and password match)
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('User not found');
        }

        // Check if the password matches (plain text comparison)
        if (password !== user.password) {
            return res.status(400).send('Invalid password');
        }

        // If credentials are correct, generate a JWT token
        const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });

        res.json({
            message: 'Login successful',
            token,
        });
    } catch (error) {
        res.status(500).send('Error logging in');
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
