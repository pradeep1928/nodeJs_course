// const sgMail = require('@sendgrid/mail');
const nodemailer = require("nodemailer");

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const sendWelcomeEmail = (email, name) => {
//     sgMail.send({
//         to: email,
//         from: 'pradeeppadmukhi2837@gmail.com',
//         subject: 'this is mail from task-manager-app',
//         text: `Welcome to task manager app ${name} `
//     })
// }

// const sendCancelationEmail = (email, name) => {
//     sgMail.send({
//         to: email,
//         from: 'pradeeppadmukhi2837@gmail.com',
//         subject: 'Sorry to see you go',
//         text: `Goodby, ${name} I hope to see you back.`
//     })
// }



// nodemailer transporter
const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "lawbell135@gmail.com",
    pass: "krrgwvhypndjxbba"
  },
});

const sendWelcomemail =  (email, name) => {

const mailOptions = {
  from: "lawbell135@gmail.com",
  to: email,
  subject: "Sending Email using Node.js",
  text: `Welcome to task manager app ${name}`,
};

transport.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
  }
  console.log("this is mail info", info.messageId);
});
};

module.exports = {
    sendWelcomemail
}
