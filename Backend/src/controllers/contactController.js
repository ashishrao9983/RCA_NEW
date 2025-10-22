const { PrismaClient } = require('@prisma/client');
const transporter = require('../config/emailConfig');

const prisma = new PrismaClient();

// Submit Contact Form
const submitContactForm = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, subject, message } = req.body;

    // Validation
    if (!fullName || !email || !phoneNumber || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format',
      });
    }

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        fullName,
        email,
        phoneNumber,
        subject,
        message,
      },
    });

    console.log('✅ Contact submission saved to database:', submission.id);

    // Prepare email to owner
    const ownerMailOptions = {
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #4CAF50; }
            .footer { text-align: center; margin-top: 20px; color: #777; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🔔 New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Full Name:</div>
                <div class="value">${fullName}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Phone Number:</div>
                <div class="value"><a href="tel:${phoneNumber}">${phoneNumber}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${subject}</div>
              </div>
              
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>Received on: ${new Date().toLocaleString()}</p>
              <p>Submission ID: ${submission.id}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email to owner
    await transporter.sendMail(ownerMailOptions);
    console.log('✅ Email sent to owner');

    // Optional: Send confirmation email to user
    const userMailOptions = {
      from: `"Your Company" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Contacting Us! 🎉</h2>
            </div>
            <div class="content">
              <p>Dear ${fullName},</p>
              <p>We have received your message and will get back to you as soon as possible.</p>
              <p><strong>Your message:</strong></p>
              <p style="background-color: white; padding: 15px; border-left: 3px solid #4CAF50;">${message}</p>
              <p>Best regards,<br>Your Company Team</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(userMailOptions);
    console.log('✅ Confirmation email sent to user');

    // Send success response
    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully! We will get back to you soon.',
      data: {
        id: submission.id,
        submittedAt: submission.createdAt,
      },
    });

  } catch (error) {
    console.error('❌ Error in submitContactForm:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form. Please try again later.',
      error: error.message,
    });
  }
};

// Get all submissions (Admin only)
const getAllSubmissions = async (req, res) => {
  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
    });

    res.json({
      success: true,
      count: submissions.length,
      data: submissions,
    });
  } catch (error) {
    console.error('❌ Error in getAllSubmissions:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch submissions',
    });
  }
};

// Get single submission by ID
const getSubmissionById = async (req, res) => {
  try {
    const { id } = req.params;

    const submission = await prisma.contactSubmission.findUnique({
      where: { id },
    });

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Submission not found',
      });
    }

    res.json({
      success: true,
      data: submission,
    });
  } catch (error) {
    console.error('❌ Error in getSubmissionById:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch submission',
    });
  }
};

module.exports = {
  submitContactForm,
  getAllSubmissions,
  getSubmissionById,
};