'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  try {
    // Send email
    await transporter.sendMail({
      from: {
        name: 'ed.dev',
        address: process.env.EMAIL_USER as string
      },
      replyTo: email, // Allow replies to go to the sender
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        Sent on: ${date}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            </style>
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Inter', sans-serif; line-height: 1.6; background-color: #f3f4f6;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background-color: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <!-- Header -->
                <div style="text-align: center; margin-bottom: 30px;">
                  <h1 style="margin: 0; color: #22c55e; font-size: 24px; font-weight: 700;">New Message Received</h1>
                  <p style="color: #6b7280; font-size: 14px; margin-top: 8px;">
                    You have received a new message from your portfolio website
                  </p>
                </div>

                <!-- Divider -->
                <div style="height: 1px; background-color: #e5e7eb; margin: 24px 0;"></div>

                <!-- Content -->
                <div style="margin-bottom: 30px;">
                  <div style="margin-bottom: 20px;">
                    <p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280;">From:</p>
                    <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px;">
                      <h2 style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">${name}</h2>
                      <p style="margin: 4px 0 0 0; color: #22c55e; font-size: 14px;">${email}</p>
                    </div>
                  </div>

                  <div>
                    <p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280;">Message:</p>
                    <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px;">
                      <p style="margin: 0; color: #111827; font-size: 14px; white-space: pre-wrap;">${message}</p>
                    </div>
                  </div>
                </div>

                <!-- Footer -->
                <div style="text-align: center;">
                  <p style="margin: 0; color: #6b7280; font-size: 12px;">
                    Sent on ${date}
                  </p>
                  <p style="margin: 8px 0 0 0; color: #6b7280; font-size: 12px;">
                    This is an automated message from your portfolio website
                  </p>
                </div>
              </div>

              <!-- Signature -->
              <div style="text-align: center; margin-top: 20px;">
                <p style="margin: 0; color: #6b7280; font-size: 12px;">
                  © ${new Date().getFullYear()} ed.dev | All rights reserved
                </p>
              </div>
            </div>
          </body>
        </html>
      `
    })

    return { success: true, message: 'Email sent successfully!' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'Failed to send email. Please try again.' }
  }
}

