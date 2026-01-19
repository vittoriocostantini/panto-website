import { eventBus } from "../utils/event.js";

eventBus.on('user_registered', (user) => {
  console.log(`✉️ [OBSERVER]: Preparando correo de bienvenida para: ${user.email}`);
  // Aquí podrías llamar a una función de Nodemailer, por ejemplo.
});
