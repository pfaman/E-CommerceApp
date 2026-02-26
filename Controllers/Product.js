import { Product } from "../Models/Product.js";

// Add Product

export const addProduct = async (req, res) => {
  try {
    console.log(req.body);
    let product = await Product.create(req.body);
    res
      .status(201)
      .json({ message: "Product added successfully", success: true, product });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};


// Read All Products

export const getAllProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).json({ message: "Products retrieved successfully", success: true, products });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Delete Product

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    let deleteProductId = await Product.findByIdAndDelete(id);

    if (!deleteProductId) {
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    } else {
      res
        .status(200)
        .json({ message: "Product deleted successfully", success: true });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};


// Update Product

export const updateProduct = async (req, res ) =>{

  try {
    const id = req.params.id;
    let updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new : true});

    if(!updatedProduct){
      return res.status(404).json({message : "Product not found", success : false})
    } else {
      res.status(200).json({message : "Product updated successfully", success : true, updatedProduct})
    }
  } catch (error) {
    res.status(500).json({message : error.message, success : false})
  }  
};

// Get Product by ID

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    let product = await Product.findById(id);

    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    } else {
      res
        .status(200)
        .json({ message: "Product retrieved successfully", success: true, product });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};