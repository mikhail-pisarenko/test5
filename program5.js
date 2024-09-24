// Simple function to send an email
function sendEmail(to, subject, body, smtpPassword) {
    console.log(`Sending email to: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);
    console.log(`Using SMTP password: ${smtpPassword}`);
}

// Calling the function
sendEmail("user@example.com", "Hello", "This is a test email", "your_smtp_password_here");

// Secret: smtp_password
const smtp_password = "mypasswordadmin";
console.log("SMTP Password: " + smtp_password);
