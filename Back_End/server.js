require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());


const contact = require('./controls/Contact.js')
// const inquiry = require('./controls/Inquiry.js')
app.use('/', contact)
// app.use('/', inquiry)
// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});