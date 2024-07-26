"use client";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Resend API key not configured" }, { status: 500 });
  }

  try {
    const { email, subject, message } = await req.json();
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [process.env.MY_EMAIL],
      subject: subject,
      html: `
        <p>Message from: ${email}</p>
        <p>${message}</p>
      `
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}