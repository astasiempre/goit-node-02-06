const nodemailer = require('nodemailer');
require("dotenv").config();
const { PASSWORD_META } = process.env;

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'yuriikot@meta.ua',
    pass: PASSWORD_META
  }
}

const transport = nodemailer.createTransport(nodemailerConfig);
// const email = {
//   from: 'yuriikot@meta.ua',
//   to: 'dileme5196@watrf.com',
//   subject: 'Test email',
//   html: '<h1>Test email from localhost3000</h1>'
// }

// const sendEmail = transport.sendMail(email)
//   .then(() => console.log('Email sent successfully'))
//   .catch(error => console.log(error.message));


  const sendEmail = async (data) => {
    const email = {...data, from: "yuriikot@meta.ua"};
    await transport.sendMail(email);
    return true;
}
module.exports = sendEmail;