import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill out all fields" },
      { status: 400 },
    );
  }

  const receiverEmail = process.env.EMAIL_USERNAME;
  const receiverEmailPassword = process.env.EMAIL_PASSWORD;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use SSL
    auth: {
      user: receiverEmail,
      pass: receiverEmailPassword,
    },
  });

  try {
    await transporter.verify();

    await transporter.sendMail({
      from: email,
      replyTo: email,
      to: receiverEmail,
      subject: `New message from ${name}`,
      text: `From: ${email}\n\nMessage: ${message}`,
    });
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
