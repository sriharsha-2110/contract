const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3004;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/registration', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define Schemas and Models
const farmerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phone: String,
    state: String,
    district: String,
    taluk: String,
    password: String
});

const contractorSchema = new mongoose.Schema({
    name: String,
    age: String,
    phone: String,
    password: String
});

const Farmer = mongoose.model('Farmer', farmerSchema);
const Contractor = mongoose.model('Contractor', contractorSchema);

// Farmer Registration Endpoint
app.post('/register/farmer', async (req, res) => {
    try {
        const { name, age, phone, state, district, taluk, password } = req.body;

        if (!name || !age || !phone || !state || !district || !taluk || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newFarmer = new Farmer({ name, age, phone, state, district, taluk, password });
        await newFarmer.save();
        res.status(201).json({ message: 'Farmer registered successfully' });
    } catch (error) {
        console.error('Error registering farmer:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Contractor Registration Endpoint
app.post('/register/contractor', async (req, res) => {
    try {
        const { name, age, phone, password } = req.body;

        if (!name || !age || !phone || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newContractor = new Contractor({ name, age, phone, password });
        await newContractor.save();
        res.status(201).json({ message: 'Contractor registered successfully' });
    } catch (error) {
        console.error('Error registering contractor:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get Contract Data (Farmers & Contractors)
app.get('/getContractData', async (req, res) => {
    try {
        const farmers = await Farmer.find(); // Get all farmers
        const contractors = await Contractor.find(); // Get all contractors

        const allData = {
            farmers: farmers,
            contractors: contractors
        };

        res.status(200).json(allData);  
    } catch (error) {
        console.error('Error fetching contract data:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Start Server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
  