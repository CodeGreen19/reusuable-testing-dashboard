import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiUrl = `http://bulksmsbd.net/api/smsapi`;

    const params = new URLSearchParams({
      api_key: "0945olMcetZ7yiQgh1q2",
      type: "text",
      number: "01954921359", // You can make this dynamic if needed
      senderid: "8809617623877",
      message,
    });

    const response = await axios.post(`${apiUrl}?${params.toString()}`);

    return NextResponse.json({ success: true, response: response.data });
  } catch (err) {
    console.error("SMS error:", err);
    if (err instanceof Error) {
      return NextResponse.json({ error: err?.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Error occurs" }, { status: 500 });
  }
}
