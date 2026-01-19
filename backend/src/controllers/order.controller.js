import { OrderService } from "../services/order.service.js";

const orderService = new OrderService();

export const getOrders = async (req, res) => {
  try {
    const orders = await orderService.getAll();
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }
    return res.status(200).json(orders);
  } catch (error) {
    console.error("Error al obtener las ordenes:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const addOrder = async (req, res) => {
  const { items } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ message: "El carrito está vacío" });
  }

  try {
    const newOrder = await orderService.create(items);

    return res.status(201).json({
      message: "Order created successfully",
      order: newOrder
    });
  } catch (error) {
    console.error("Error al crear la orden:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
