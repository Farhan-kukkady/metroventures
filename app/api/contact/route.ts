import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please provide a valid phone number with at least 10 digits"),
  email: z.string().email("Please provide a valid email address"),
  service: z.string().min(1, "Please select a service of interest"),
  city: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    const { name, phone, email, service, city, message } = validatedData;
    const recipientEmail = process.env.CONTACT_RECIPIENT || "Metroventures88@gmail.com";

    // Check if SMTP environment variables are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"${name} (via Metro Ventures)" <${smtpUser}>`,
        replyTo: email,
        to: recipientEmail,
        subject: `New Metro Ventures Enquiry: ${service} - ${name}`,
        text: `
Name: ${name}
Phone: ${phone}
Email: ${email}
Service of Interest: ${service}
City / Region: ${city || "Not specified"}

Message:
${message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #c5a869; border-radius: 12px; background-color: #0b1120; color: #f8fafc;">
            <div style="border-bottom: 1px solid #1e293b; padding-bottom: 16px; margin-bottom: 20px;">
              <h2 style="color: #c5a869; margin: 0; font-size: 22px;">Metro Ventures Enquiry</h2>
              <p style="color: #94a3b8; font-size: 13px; margin: 4px 0 0 0;">Received via metroventures.in</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #e2e8f0;">
              <tr>
                <td style="padding: 8px 0; color: #94a3b8; width: 140px;">Client Name:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #f8fafc;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #c5a869; text-decoration: none; font-weight: bold;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #c5a869; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8;">Division / Service:</td>
                <td style="padding: 8px 0; color: #f8fafc;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94a3b8;">Location:</td>
                <td style="padding: 8px 0; color: #f8fafc;">${city || "Karnataka / General"}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 16px; background-color: #162035; border-radius: 8px; border-left: 3px solid #c5a869;">
              <h4 style="margin: 0 0 8px 0; color: #c5a869; font-size: 13px; text-transform: uppercase;">Message:</h4>
              <p style="margin: 0; color: #f1f5f9; white-space: pre-line; line-height: 1.5;">${message}</p>
            </div>

            <div style="margin-top: 24px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #1e293b; padding-top: 12px;">
              © 2026 Metro Ventures · Comprehensive Real Estate & Construction Solutions
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      // In development or when SMTP credentials are not yet entered in .env.local,
      // log enquiry to stdout for auditing and deliver successful response
      console.log("=== [METRO VENTURES CONTACT ENQUIRY] ===");
      console.log("Timestamp:", new Date().toISOString());
      console.log("Name:", name);
      console.log("Phone:", phone);
      console.log("Email:", email);
      console.log("Service:", service);
      console.log("City:", city || "N/A");
      console.log("Message:", message);
      console.log("Target Email:", recipientEmail);
      console.log("Note: Set SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local for live SMTP delivery.");
      console.log("=========================================");
    }

    return NextResponse.json({
      success: true,
      message: "Thank you. Your enquiry has been received. Our leadership team will contact you shortly.",
    });
  } catch (error: any) {
    console.error("Contact API Route Error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please call +91 9035500444 directly." },
      { status: 500 }
    );
  }
}

