import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();
  const data = { name, email, message };

  const user = process.env.User;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: user,
      pass: process.env.Password,
    },
  });

  const mailOptions = {
    from: user,
    to: "alaa.ahmed20022002@gmail.com",
    replyTo: email,
    subject: `Contact from Submission From ${name}`,
    html: `
    <p>Name:${name}</p>
    <p>Email:${email}</p>
    <p>Message:${message}</p>
    `,
  };
if(data){
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Message has been sent !", status: 200 });
  } catch (err) {
    return NextResponse.json({
      message: "Message hasn't been sent.Try again !",
      status: 500,
    });
  }
}
  
}
