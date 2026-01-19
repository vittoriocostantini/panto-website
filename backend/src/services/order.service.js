import { Order } from "../models/order.model.js";
import { eventBus } from "../utils/event.js";

export class OrderService {
  async getAll() {
    return await Order.find();
  }

  async create(items) {
    const totalPrice = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const newOrder = new Order({
      items: items.map((item) => ({
        productId: item.productId,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalPrice,
    });

    await newOrder.save();
    eventBus.emit('order_created', newOrder);
    return newOrder;
  }
}
