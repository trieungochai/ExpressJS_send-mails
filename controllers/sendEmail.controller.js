const { StatusCodes } = require("http-status-codes");
const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
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

module.exports = sendEmail;
