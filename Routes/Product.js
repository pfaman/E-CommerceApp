import express from 'express';
import { addProduct, deleteProduct, getAllProducts } from '../Controllers/Product.js';
const router = express.Router();


// Add Product
// Request Type : POST
// @api api/product/add-product
// 
router.post('/add', addProduct);

// Read All Products
// Request Type : GET
// @api api/product/get-all-products
// 
router.get('/get-all', getAllProducts);


// Delete Product
// Request Type : POST
// @api api/product/delete-product
// 
router.delete('/delete/:id', deleteProduct);


export default router;