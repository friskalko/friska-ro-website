const nodemailer = require('nodemailer');
const ejs = require('ejs');

module.exports = class Email {
    constructor(user, url) {
        this.to = user.email;
        this.firstName = user.name.split(' ')[0];
        this.url = url;
        this.from = `Friska <${process.env.GMAIL_NODEMAILER_USER}>`;
    }

    newTransport() {
        // ***************
        // NODEMAILER - GMAIL CONFIG
        // ****************
        return nodemailer.createTransport(
            // USING GMAIL SERVICE
            {
                service: 'gmail',
                auth: {
                    user: process.env.GMAIL_NODEMAILER_USER,
                    pass: process.env.GMAIL_NODEMAILER_PASS,
                },
            }
        );
    }

    // Send the actual email
    async send(template, subject) {
        try {
            // 1) Render HTML based on a ejs template
            const html = await ejs.renderFile(
                `${__dirname}/../views/emails/${template}.ejs`,
                {
                    firstName: this.firstName,
                    url: this.url,
                    subject,
                }
            );

            // 2) Define email options
            const mailOptions = {
                from: this.from,
                to: this.to,
                subject,
                html: html,
            };

            // 3) Create a transport and send email
            await this.newTransport().sendMail(mailOptions);
        } catch (err) {
            console.log(err);
        }
    }

    async sendWelcome() {
        await this.send('welcome', 'Welcome to the Natours Family!');
    }
};
