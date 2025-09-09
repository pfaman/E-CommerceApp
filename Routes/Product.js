import express from 'express';
import { addProduct, deleteProduct, getAllProducts, updateProduct } from '../Controllers/Product.js';
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


// Update Products
// Request Type : PUT
// @api api/product/update-product
// 
router.put('/update/:id', updateProduct);

// Delete Product
// Request Type : DELETE
// @api api/product/delete-product
// 
router.delete('/delete/:id', deleteProduct);


export default router;