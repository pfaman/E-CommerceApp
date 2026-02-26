import express from 'express';
import { addToCart, clearCart, decreaseProductQuanity, getUserCart, removeProductFromCartById } from '../Controllers/Cart.js';
import { authMiddleware } from '../MiddleWares/Auth.js';
const router = express.Router();

// Add to Cart
// Request Type : POST
// @api api/cart/add
router.post('/add', authMiddleware, addToCart);


// Get User Cart
// Request Type : GET
// @api api/cart/user-cart
router.get('/user-cart', authMiddleware, getUserCart);

// Delete Product from Cart
// Request Type : Delete
// @api api/cart/delete/:id
router.delete('/remove/:productId', authMiddleware, removeProductFromCartById);


// Clear Product from Cart
// Request Type : Delete
// @api api/cart/clear
router.delete('/clear', authMiddleware, clearCart);


// Decrease quantity from Cart
// Request Type : POST
// @api api/cart/decrease-quantity
router.post('/decrease-quanity', authMiddleware, decreaseProductQuanity);

export default  router;