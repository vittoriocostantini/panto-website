import { ProductService } from "../services/product.service.js";

const productService = new ProductService();

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener productos' });
  }
};

export const addProduct = async (req, res) => {
  try {
    if (!req.body.name || !req.body.price) {
      return res.status(400).json({ message: 'Campos obligatorios faltantes' });
    }
    const newProduct = await productService.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear producto' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await productService.delete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    return res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar producto' });
  }
};
