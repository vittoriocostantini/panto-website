import { Cart } from '../models/cart.model.js';

class CartService {
  /**
   * Obtiene el carrito por userId o guestId.
   * Si no existe, lo crea automáticamente.
   */
  async getCart(userId, guestId) {
    if (!userId && !guestId) {
      throw new Error("Se requiere userId o guestId para obtener el carrito");
    }

    // Buscamos por userId si existe, si no, por guestId
    const query = userId ? { userId } : { guestId };
    let cart = await Cart.findOne(query);

    if (!cart) {
      cart = await Cart.create(query);
    }
    return cart;
  }

  /**
   * Añade un producto al carrito.
   * Soluciona el error de validación mapeando campos explícitamente.
   */
  async addItem(userId, guestId, product) {
    // VALIDACIÓN: Verificamos que el objeto product y el ID existan
    if (!product || !product.productId) {
      throw new Error("Estructura de producto inválida: falta productId");
    }

    const cart = await this.getCart(userId, guestId);

    // Buscamos si el producto ya está en el carrito
    const existingIndex = cart.items.findIndex(
      (item) => item.productId === product.productId
    );

    if (existingIndex > -1) {
      // Si existe, incrementamos la cantidad (asegurando que sea un número)
      cart.items[existingIndex].quantity += (Number(product.quantity) || 1);
    } else {
      // Si es nuevo, lo agregamos mapeando los campos uno a uno
      // Esto evita que Mongoose reciba valores undefined
      cart.items.push({
        productId: product.productId,
        name: product.name,
        price: Number(product.price),
        image: product.image,
        category: product.category,
        quantity: Number(product.quantity) || 1
      });
    }

    // Al guardar, Mongoose valida todo el array de items
    return await cart.save();
  }

  /**
   * Actualiza la cantidad de un producto sumando un delta (+1 o -1)
   */
  async updateQuantity(userId, guestId, productId, delta) {
    const cart = await this.getCart(userId, guestId);
    const item = cart.items.find((item) => item.productId === productId);

    if (item) {
      // Evitamos cantidades menores a 1
      item.quantity = Math.max(1, item.quantity + delta);
      return await cart.save();
    }
    throw new Error("Producto no encontrado en el carrito");
  }

  /**
   * Elimina un producto específico del carrito
   */
  async removeItem(userId, guestId, productId) {
    const query = userId ? { userId } : { guestId };

    // Usamos $pull para eliminar el objeto del array de forma atómica
    const updatedCart = await Cart.findOneAndUpdate(
      query,
      { $pull: { items: { productId: productId } } },
      { new: true }
    );

    if (!updatedCart) {
      throw new Error("No se pudo encontrar el carrito para eliminar el producto");
    }
    return updatedCart;
  }

  /**
   * Fusiona el carrito de invitado con el del usuario al iniciar sesión
   */
  async mergeCarts(guestId, userId) {
    console.log(`[SERVICE] Iniciando merge: Guest ${guestId} -> User ${userId}`);

    const guestCart = await Cart.findOne({ guestId });

    // Si no hay nada que fusionar, terminamos
    if (!guestCart || guestCart.items.length === 0) return;

    let userCart = await Cart.findOne({ userId });
    if (!userCart) {
      userCart = await Cart.create({ userId });
    }

    // Recorremos los productos del invitado y los pasamos al usuario
    guestCart.items.forEach((gItem) => {
      const existing = userCart.items.find(
        (uP) => uP.productId === gItem.productId
      );

      if (existing) {
        existing.quantity += gItem.quantity;
      } else {
        // Clonamos el item para evitar problemas de referencia
        userCart.items.push({
          productId: gItem.productId,
          name: gItem.name,
          price: gItem.price,
          image: gItem.image,
          category: gItem.category,
          quantity: gItem.quantity
        });
      }
    });

    await userCart.save();

    // Limpiamos el carrito de invitado después de la fusión exitosa
    await Cart.deleteOne({ guestId });
    console.log(`[SERVICE] Merge completado con éxito para el usuario: ${userId}`);
  }
}

export const cartService = new CartService();
