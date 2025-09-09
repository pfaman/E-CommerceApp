import express from 'express';
import { addProduct } from '../Controllers/Product.js';
const router = express.Router();


// Add Product
// Request Type : POST
// @api api/product/add-product
// 
router.post('/add-product', addProduct);

export default router;