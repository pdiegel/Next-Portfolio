import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { name, email, message } = req.body;

	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false, // use SSL
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	if (!name || !email || !message) {
		return res.status(400).json({ error: "Please fill out all fields" });
	}

	const mailOptions = {
		from: email,
		to: process.env.EMAIL_USERNAME,
		subject: `New message from ${name}`,
		text: `From: ${email}\n\nMessage: ${message}`,
	};

	transporter.sendMail(mailOptions, (error, _) => {
		if (error) {
			return res.status(500).json({ error: "Failed to send email" });
		}
		return res.status(200).json({ message: "Email sent" });
	});
}
