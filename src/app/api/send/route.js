import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  let email, subject, message;
  try {
    ({ email, subject, message } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const emailContent = (
    <>
      <p>Message from: {email}</p>
      <p>{message}</p>
    </>
  );

  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [process.env.MY_EMAIL],
      subject: subject,
      react: emailContent,
    });
    if (data.error) {
      return NextResponse.json(data, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}