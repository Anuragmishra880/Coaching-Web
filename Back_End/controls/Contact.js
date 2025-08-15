
const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');


// POST Route
router.post('/contact', async (req, res) => {
    const { name, phNumber, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {

            user: process.env.GMAIL_USER,    // GMAIL-ID
            pass: process.env.GMAIL_PASS     // App password

        }
    });

    const mailOptions = {
        from: 'anuragkumar575957@gmail.com',
        to: 'anuragkumar575957@gmail.com',   // You receive the message
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nPhone: ${phNumber}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: '✅ Email sent successfully!' });
    } catch (error) {
        console.error('Email Send Error:', error);
        res.status(500).json({ message: '❌ Failed to send email', error });
    }
});

module.exports = router
