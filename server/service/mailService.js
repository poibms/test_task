const nodemaier = require('nodemailer');

class mailService {

  constructor() {
    this.transporter = nodemaier.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      text: 'Account activation' + process.env.API_URL,
      html:
        `
          <div>
            <h1>To activate your account follow the link</h1>
            <a href='${link}'>${link}</a>
          </div>
        `
    })
  }
}

module.exports = new mailService();