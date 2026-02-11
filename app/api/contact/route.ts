import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

/* ------------------ Verify reCAPTCHA ------------------ */
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY not configured');
    return false;
  }

  try {
    const response = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

/* ------------------ Sanitize Input ------------------ */
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim()
    .substring(0, 1000);
}

/* ------------------ POST Handler ------------------ */
export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const requiredFields = [
      'fullName',
      'companyName',
      'workEmail',
      'projectBrief',
      'recaptchaToken',
    ];

    const missingFields = requiredFields.filter(
      (field) => !body[field as keyof ContactFormData]
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    /* Verify reCAPTCHA */
    const isRecaptchaValid = await verifyRecaptcha(body.recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    /* Sanitize Data */
    const sanitizedData = {
      fullName: sanitizeInput(body.fullName),
      companyName: sanitizeInput(body.companyName),
      workEmail: sanitizeInput(body.workEmail),
      phoneNumber: body.phoneNumber
        ? sanitizeInput(body.phoneNumber)
        : '',
      industry: body.industry ? sanitizeInput(body.industry) : '',
      services: Array.isArray(body.services)
        ? body.services.map((service) => sanitizeInput(service))
        : [],
      projectBrief: sanitizeInput(body.projectBrief),
    };

    /* Validate Email */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.workEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    /* Send Email via Resend */
    await resend.emails.send({
      from: 'DigiCompanions <onboarding@resend.dev>',
      to: ['business@digicompanions.com'], 
      subject: 'New Business Inquiry - DigiCompanions Website',
      replyTo: sanitizedData.workEmail,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #441b93; border-bottom: 2px solid #6db724; padding-bottom: 10px;">
            New Business Inquiry
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${sanitizedData.fullName}</p>
            <p><strong>Company:</strong> ${sanitizedData.companyName}</p>
            <p><strong>Email:</strong> ${sanitizedData.workEmail}</p>
            ${sanitizedData.phoneNumber ? `<p><strong>Phone:</strong> ${sanitizedData.phoneNumber}</p>` : ''}
            ${sanitizedData.industry ? `<p><strong>Industry:</strong> ${sanitizedData.industry}</p>` : ''}
          </div>

          ${
            sanitizedData.services.length > 0
              ? `
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Services Required</h3>
            <ul>
              ${sanitizedData.services
                .map((service) => `<li>${service}</li>`)
                .join('')}
            </ul>
          </div>
          `
              : ''
          }

          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Project Brief</h3>
            <p style="white-space: pre-wrap;">${sanitizedData.projectBrief}</p>
          </div>

          <p style="font-size: 12px; color: #777;">
            Submitted at: ${new Date().toLocaleString('en-IN', {
              timeZone: 'Asia/Kolkata',
            })}
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
