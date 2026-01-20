import { eventBus } from "../utils/event.js";
import { cartService } from "../services/cart.service.js";

// Observer: Escucha el login para fusionar carritos
eventBus.on('AUTH_LOGIN_SUCCESS', async ({ guestId, userId }) => {
  try {
    if (guestId && userId) {
      console.log(`[CARRITO] Observer: Fusionando ${guestId} -> ${userId}`);
      await cartService.mergeCarts(guestId, userId);
    }
  } catch (error) {
    console.error('[CARRITO ERROR] Error en Observer:', error.message);
  }
});
