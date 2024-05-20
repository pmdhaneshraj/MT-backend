const fast2sms = require('fast-two-sms')
const { FAST2SMS } = require("../config");
const { default: axios } = require('axios');


exports.generateOTP = (otp_length) => {
  // Declare a digits variable
  // which stores all digits
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

exports.fast2sms = async ({ message, contactNumber }) => {
  try {
    console.log({ message, contactNumber, FAST2SMS, fast: process.env.FAST2SMS })
    const res = await axios.get('https://www.fast2sms.com/dev/bulkV2', {
      authorization: process.env.FAST2SMS,
      message,
      numbers: [contactNumber],
    });
    console.log({ res });
  } catch (error) {
    // next(error);
  }
};
