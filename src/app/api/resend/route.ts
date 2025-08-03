import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function GET() {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    subject: "First Email To Send",
    to: "codegreen19s@gmail.com",
    html: "<div>This mail is send through Resend</div>",
  });
  return NextResponse.json({ data, error });
}
