const nodemailer = require("nodemailer");

const enviarCorreo = async ({ correo, nombre, token }) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const info = await transport.sendMail({
        from: '"HidraPaws 🐾" <no-reply@hidrapaws.com>',
        to: correo,
        subject: "Restablece tu contraseña",
        html: `
      <p>Hola ${nombre}, has solicitado restablecer tu contraseña.</p>
      <p>Haz clic en el siguiente enlace para generar una nueva contraseña:</p>
      <a href="${process.env.FRONTEND_URL}/restablecer/${token}">Restablecer Contraseña</a>
      <p>Este enlace expirará en 1 hora.</p>
    `
    });
};

module.exports = enviarCorreo;
