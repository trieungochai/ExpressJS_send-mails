const { StatusCodes } = require("http-status-codes");
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const sendEmailEthereal = async (req, res) => {
  // Generate test SMTP service account from ethereal.email
  const testAccount = await nodemailer.createTestAccount();

  // Create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "alejandrin.bartoletti@ethereal.email",
      pass: "knPVU4KSTDu9mHTFu6",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Cowboy from Hell 👻" <haitn.ute@gmail.com>', // sender address
    to: "trieungochai.ute@gmail.com", // list of receivers
    subject: "See you, Space Cowboy ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  return res.status(StatusCodes.OK).json({ info });
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "test@example.com", // Change to your recipient
    from: "test@example.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });

  return res.status(StatusCodes.OK).json({ msg });
};

module.exports = sendEmail;
