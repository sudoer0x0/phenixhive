import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, company, email, phone, service, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // In production, this can send via Resend, SendGrid, or direct webhook
    // Log the validated inquiry for audit trail
    console.log("PhenixHive Contact Submission received:", {
      timestamp: new Date().toISOString(),
      name,
      company: company || "N/A",
      email,
      phone: phone || "N/A",
      service: service || "General Evaluation",
      messageLength: message.length,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been successfully received by PhenixHive. A security specialist will contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error processing inquiry. Please contact us directly at phenixhive@gmail.com" },
      { status: 500 }
    );
  }
}
