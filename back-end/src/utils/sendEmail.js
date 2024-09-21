import nodemailer from "nodemailer";

export const sendEmail = async (to, token) => {
  // Configure o serviço de e-mail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      admEmail: process.env.EMAIL_ADM,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Configurar o conteúdo do e-mail
  const mailOptions = {
    from: "admemail",
    to: to,
    subject: "Seu Token de Login",
    text: `Seu token de login é: ${token}`,
  };

   // Enviar o e-mail
  await transporter.sendMail(mailOptions);
};
