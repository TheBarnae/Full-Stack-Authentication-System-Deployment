const nodemailer = require('nodemailer');
const https = require('https');

module.exports = sendEmail;

async function sendEmail({ to, subject, html, from }) {
    console.log(`📧 Attempting to send email to: ${to}`);
    const data = JSON.stringify({
        sender: { email: from || process.env.EMAIL_FROM },
        to: [{ email: to }],
        subject: subject,
        htmlContent: html
    });

    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'api.brevo.com',
            path: '/v3/smtp/email',
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'api-key': process.env.BREVO_API_KEY
            }
        };

        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                console.log(`📡 Brevo API Response Status: ${res.statusCode}`);
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    console.log('✅ Email sent successfully via Brevo API');
                    console.log(`📄 Response: ${body}`);
                    resolve(body);
                } else {
                    console.error(`❌ Brevo API error (Status ${res.statusCode}): ${body}`);
                    reject(new Error(`Brevo API error: ${body}`));
                }
            });
        });

        req.on('error', (err) => {
            console.error('❌ Request error:', err);
            reject(err);
        });
        req.write(data);
        req.end();
    });
}