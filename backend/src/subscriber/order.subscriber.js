import {eventBus} from "../utils/event.js";

// Cuando se crea una orden, queremos hacer varias cosas:
eventBus.on('order_created', (order) => {
  // Acción 1: Log de auditoría
  console.log(`[VENTA]: Nueva orden generada ID: ${order._id}. Total: $${order.totalPrice}`);

  // Acción 2: (Idea para luego) Aquí podrías llamar a un servicio de Email
  // sendConfirmationEmail(order.userEmail, order);
});

// Acción 3: Reducir Stock (MUY IMPORTANTE para tu proyecto)
eventBus.on('order_created', async (order) => {
  console.log("[INVENTARIO]: Bajando stock de los productos comprados...");
  // Aquí recorrerías order.items y restarías la cantidad en tu base de datos de productos
});


