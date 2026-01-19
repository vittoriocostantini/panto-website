import { Product } from "../models/product.model.js";
import { eventBus } from "../utils/event.js";

export class ProductService {
  async getAll() {
    return await Product.find();
  }

  async create(productData) {
    const product = new Product(productData);
    await product.save();
    eventBus.emit('product_created', product);
    return product;
  }

  async delete(id) {
    const deleted = await Product.findByIdAndDelete(id);
    if (deleted) {
      eventBus.emit('product_deleted', id);
    }

    return deleted;
  }
}
