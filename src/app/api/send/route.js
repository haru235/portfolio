import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [process.env.MY_EMAIL],
      subject: subject,
      react: (
        <>
        <p>Message from: ${email}</p>
        <p>${message}</p>
        </>
    ),
  });
  return NextResponse.json(data);
} catch (error) {
  return NextResponse.json({ error });
}
}