const emailJs = require("@emailjs/browser");
const browserEnv = require("browser-env");

const sendEmail = async (name, email, message) => {
  browserEnv(['navigator', 'location']);
  emailJs.init({
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    blockHeadless: true,
  });
  try {
    await emailJs.send(
      process.env.EMAILJS_SERVICE_ID ?? "",
      process.env.EMAILJS_TEMPLATE_ID ?? "",
      {
        from_name: "Doctor In Hand",
        to_name: name,
        email: email,
        message: message,
        reply_to: email,
      }
    );

    return true;
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

module.exports = sendEmail;
