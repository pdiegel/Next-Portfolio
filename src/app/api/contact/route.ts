import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

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
    return NextResponse.json(
      { error: "Please fill out all fields" },
      { status: 400 },
    );
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USERNAME,
    subject: `New message from ${name}`,
    text: `From: ${email}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, _) => {
    if (error) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }
  });
  return NextResponse.json({ message: "Email sent" }, { status: 200 });
}
