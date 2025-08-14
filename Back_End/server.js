
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
// const Contact = require('../Back_End/controls/Contact.js')
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());


const contact = require('./controls/Contact.js')
const inquiry = require('./controls/Inquiry.js')
app.use('/', contact)
app.use('/', inquiry)
// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});