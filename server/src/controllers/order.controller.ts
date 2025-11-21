import { Request, Response } from "express";
import { Order } from "../models/";

// obtener todas las ordenes
export const getOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }
    return res.json(orders);
  } catch (error) {
    console.error("Error al obtener las ordenes:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

//add order

export const addOrder = async (req: Request, res: Response) => {
  const { items } = req.body;
  if (!items || items.length === 0) {
    return res.status(400).json({ message: "cart are empty" });
  }
  try {
    const newOrder = new Order({
      items: items.map((item: any) => ({
        productId: item.productId,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalPrice: items.reduce(
        (sum: number, item: any) => sum + item.price * item.quantity,
        0
      ),
    });
    await newOrder.save();
    return res
      .status(201)
      .json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    console.error("Error al crear la orden:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
