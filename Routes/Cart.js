import express from 'express';
import { addToCart, getUserCart, removeProductFromCartById } from '../Controllers/Cart.js';
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

export default  router;