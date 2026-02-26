import { Cart } from "../Models/Cart.js";

// Add to Cart

export const addToCart = async (req, res) => {
  try {
    const { productId, title, price, quantity } = req.body;
    const userId = req.user._id;

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      // Create new cart
      const newCart = await Cart.create({
        userId,
        items: [],
      });
    }

    let itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (itemIndex > -1) {
      // Product exists in cart, update quantity

      let productItem = cart.items[itemIndex];
      productItem.quantity += quantity;
      productItem.price += price * quantity;
    } else {
      cart.items.push({ productId, title, quantity, price });
    }
    await cart.save();
    res.json({ message: "Item Added to Cart ", cart, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Get User Cart

export const getUserCart = async (req, res) => {
  try {
    const userId = req.user.userId;

    let cart = await Cart.findOne(userId);

    if (!cart) {
      return res
        .status(404)
        .json({ message: "Cart Not Found" }, { success: false });
    }
    res
      .status(200)
      .json({ message: "User Cart found Successfully", cart, success: true });
  } catch {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Remove Product from Cart By Id

export const removeProductFromCartById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const userId = req.user.userId;

    let cart = await Cart.findOne(userId);
    if (!cart) {
      return res
        .status(404)
        .json({ message: "Cart Not Found" }, { success: false });
    }

    cart.item = cart.items.filter(
      (item) => item.productId.toString() == productId
    );
    await cart.save();
    res
      .status(200)
      .json({ message: "Product Removed Successfully", cart, success: true });
  } catch {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Clear Cart(Remove All products)

export const clearCart = async (req, res) => {
  try {
    const userId = req.user.userId;

    let cart = await Cart.findOne(userId);
    if (!cart) {
      cart = new Cart({ item: [] });
    } else {
      cart.items = [];
    }
    await cart.save();
    res
      .status(200)
      .json({ message: "User Cart clear Successfully", success: false });
  } catch {
    res.status(500).json({ message: error.message, success: false });
  }
};

// Decrease quantity from Cart

export const decreaseProductQuanity = async (req, res) =>{
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id;

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      // Create new cart
      const newCart = await Cart.create({
        userId,
        items: [],
      });
    }

    let itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (itemIndex > -1) {
      // Product exists in cart, update quantity
      const item = cart.items[itemIndex];

      if(item.quantity > quantity){
        const pricePerUnit = item.price/item.quantity;
        item.quantity -=quantity;
        item.price -=pricePerUnit*quantity;
      }else{
        cart.items.splice(itemIndex,1);
      }
      
    } else {
          res.json({ message: "Invalid product id", success: false });

    }
    await cart.save();
    res.json({ message: "Item quanity decreased ", cart, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
}
