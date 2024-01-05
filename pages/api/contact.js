import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // use SSL
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USERNAME,
        subject: `New message from ${name}`,
        text: `From: ${email}\n\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(400);
        }
        console.log(`Email sent: ${info.response}`);
        return res.status(200);
    });
}
