import { Product } from '../Models/Product.js';

// Add Product

export const addProduct = async (req, res) => {

  try {

    let product = await product.create(req.body);
    res.status(201).json({message : "Product added successfully", success: true, product});
  } catch (error) {
    res.status(500).json({message : error.message, success: false});
  }
}