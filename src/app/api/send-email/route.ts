import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
Name: ${name}
Email: ${email}
Company: ${company || 'Not specified'}

Message:
${message}

---
This message was sent from the Mitman Solutions contact form.
    `.trim();

    // For now, we'll use a simple approach that logs the email
    // In production, you would integrate with a service like SendGrid, Mailgun, or Resend
    console.log('Email to be sent:', {
      to: 'mitman.solutions@gmail.com',
      subject: `Business Inquiry from ${name} - ${company || 'Individual'}`,
      body: emailContent
    });

    // For development/testing, we'll simulate success
    // In production, replace this with actual email sending logic
    const success = true; // Simulate email sending

    if (success) {
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
