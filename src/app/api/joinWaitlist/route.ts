import { NextRequest, NextResponse } from "next/server";
import mailgun from "mailgun-js";

const mg = mailgun({
  apiKey: process.env.NEXT_PUBLIC_MAILGUN_API_KEY!,
  domain: process.env.NEXT_PUBLIC_MAILGUN_DOMAIN!,
});

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const data = {
    from: "ArcHive <no-reply@yourdomain.com>",
    to: "abim@rejaka.me",
    subject: "New Waitlist Signup",
    text: `A new user has joined the waitlist: ${email}`,
  };

  try {
    await mg.messages().send(data);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
