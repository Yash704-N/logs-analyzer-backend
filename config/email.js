import nodemailer from 'nodemailer';

import dotenv from 'dotenv';
dotenv.config();

const sendEmail = async ({ to, subject, text, html }) => {
    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // true for port 465, false for 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },

        });


        // Email options
        const mailOptions = {
            from: `"AI Login Tracker" <${process.env.EMAIL_USER}>`,
            to, // list of receivers
            subject, // Subject line
            text, // Plain text body
            html, // HTML body
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${info.messageId}`);
        return info;
    } catch (error) {
        console.error(`Error sending email: ${error.message}`);
        throw error;
    }
};

export default sendEmail;
