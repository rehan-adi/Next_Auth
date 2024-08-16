export const verificationEmailTemplate = (
    verificationUrl: string,
    userName: string
) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Verification</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        .email-container {
          background-color: #ffffff;
          margin: 20px auto;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          max-width: 600px;
        }
        .email-header {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .email-body {
          font-size: 16px;
          color: #333333;
        }
        .verification-link {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #4CAF50;
          color: #ffffff;
          text-decoration: none;
          border-radius: 4px;
        }
        .footer {
          font-size: 12px;
          color: #888888;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">Verify Your Email Address</div>
        <div class="email-body">
          <p>Hello ${userName},</p>
          <p>Thank you for signing up! Please confirm your email address by clicking the button below:</p>
          <a href="${verificationUrl}" class="verification-link">Verify Email</a>
          <p>If you did not sign up for this account, you can ignore this email.</p>
          <p class="footer">Thank you,<br />Your Company Team</p>
        </div>
      </div>
    </body>
  </html>
`;
