import { Request, Response } from "express";
import { Product } from "../models/index.js";

// get products

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await Product.find();
    if (!products || products.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }
    return res.status(200).json(products);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};
// add product

export const addProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = new Product(req.body);
    if (!newProduct) {
      return res.status(404).json({ message: 'Campos incompletos' });
    }
    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error al guardar el producto:', error);
    return res
      .status(500)
      .json({ message: 'Error interno del servidor' });
  }
};

//delete product

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(
      req.params.productId
    );
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Producto no existe' });
    }
    return res
      .status(201)
      .json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    return res
      .status(500)
      .json({ message: 'Error interno del servidor' });
  }
};
