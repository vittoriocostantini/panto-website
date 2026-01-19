// 1. Usamos llaves { } porque es una exportación nombrada
// 2. Usamos el nombre exacto 'eventBus' que definimos en el archivo utils
import { eventBus } from "../utils/event.js";

// Observador de Log
// Cambiamos 'productEvents' por 'eventBus'
eventBus.on('product_created', (product) => {
  console.log(`[AUDITORÍA]: Se ha creado el mueble ${product.name} con ID ${product._id}`);
});

// Observador de Stock
eventBus.on('product_deleted', (id) => {
  console.log(`[INVENTARIO]: El producto ${id} ha sido removido del catálogo.`);
});
