import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  fullName: string;
  companyName: string;
  workEmail: string;
  phoneNumber?: string;
  industry?: string;
  services: string[];
  projectBrief: string;
  recaptchaToken: string;
}

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY not configured');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// Create email transporter
function createTransport() {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    throw new Error('Email credentials not configured');
  }

   return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: emailUser,
        pass: emailPass,
    },
    });

}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim()
    .substring(0, 1000); // Limit length
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const requiredFields = ['fullName', 'companyName', 'workEmail', 'projectBrief', 'recaptchaToken'];
    const missingFields = requiredFields.filter(field => !body[field as keyof ContactFormData]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(body.recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      fullName: sanitizeInput(body.fullName),
      companyName: sanitizeInput(body.companyName),
      workEmail: sanitizeInput(body.workEmail),
      phoneNumber: body.phoneNumber ? sanitizeInput(body.phoneNumber) : '',
      industry: body.industry ? sanitizeInput(body.industry) : '',
      services: Array.isArray(body.services)
  ? body.services.map(service => sanitizeInput(service))
  : [],
      projectBrief: sanitizeInput(body.projectBrief),
    };

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.workEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #5A2D82; border-bottom: 2px solid #6BBF2A; padding-bottom: 10px;">
          New Business Inquiry - DigiCompanions Website
        </h2>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1A1A1A; margin-top: 0;">Contact Information</h3>
          <p><strong>Full Name:</strong> ${sanitizedData.fullName}</p>
          <p><strong>Company Name:</strong> ${sanitizedData.companyName}</p>
          <p><strong>Work Email:</strong> ${sanitizedData.workEmail}</p>
          ${sanitizedData.phoneNumber ? `<p><strong>Phone Number:</strong> ${sanitizedData.phoneNumber}</p>` : ''}
          ${sanitizedData.industry ? `<p><strong>Industry:</strong> ${sanitizedData.industry}</p>` : ''}
        </div>

        ${sanitizedData.services.length > 0 ? `
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1A1A1A; margin-top: 0;">Services Required</h3>
          <ul style="margin: 0; padding-left: 20px;">
            ${sanitizedData.services.map(service => `<li>${service}</li>`).join('')}
          </ul>
        </div>
        ` : ''}

        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1A1A1A; margin-top: 0;">Business Goals / Project Brief</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${sanitizedData.projectBrief}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This inquiry was submitted through the DigiCompanions website contact form.</p>
          <p>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
      </div>
    `;

    // Send email
    const transporter = createTransport();
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@digicompanions.com',
      subject: 'New Business Inquiry - DigiCompanions Website',
      html: emailHtml,
      replyTo: sanitizedData.workEmail,
    });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}