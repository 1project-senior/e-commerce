const { cart, Product, User } = require("../modules/database");
const db = require("../modules/database");
module.exports = {
  /**
   * Get all cart products for a user
   */
  getAllCartProducts : async (req, res) => {
    try {
      const { UserId } = req.params;
  
      if (!UserId) {
        return res.status(400).json({ message: "UserId is required" });
      }
  
      console.log(UserId, "userid");
  
      const cartItems = await db.cart.findAll({
        where: { UserId }, // Case-sensitive; ensure it matches your cart table
        include: [{
          model: db.Products, // Use db.Products instead of Product
          attributes: ['id', 'name', 'price', 'image'],
        }],
      });
  
      if (!cartItems.length) {
        return res.status(200).json([]);
      }
  
      const formattedItems = cartItems.map(item => ({
        id: item.Product.id,
        name: item.Product.name,
        price: item.Product.price,
        image: item.Product.image,
        quantity: item.quantity,
      }));
  
      res.status(200).json(formattedItems);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Error fetching cart products" });
    }
  },

  /**
   * Add product to cart
   */
  addProductToCart: async (req, res) => {
    try {
      const { UserId, ProductId, quantity = 1 } = req.body;

      if (!UserId || !ProductId) {
        return res.status(400).json({ message: "UserId and ProductId are required" });
      }

      const [cartItem, created] = await cart.findOrCreate({
        where: { UserId, ProductId },
        defaults: { quantity }
      });

      if (!created) {
        await cartItem.increment('quantity', { by: quantity });
      }

      res.status(201).json({ 
        message: "Product added to cart",
        cartItem
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Error adding product to cart" });
    }
  },

  /**
   * Remove product from cart
   */
  removeProduct: async (req, res) => {
    try {
      const { ProductId } = req.params;
      const UserId = req.body.UserId || 1; // Default to 1 for testing

      const result = await cart.destroy({
        where: { UserId, ProductId }
      });

      if (!result) {
        return res.status(404).json({ message: "Product not found in cart" });
      }

      res.status(200).json({ message: "Product removed from cart" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Error removing product" });
    }
  },

  /**
   * Update cart product quantity
   */
  updateCartProducts: async (req, res) => {
    try {
      const { UserId, ProductId, quantity } = req.body;

      if (!UserId || !ProductId || !quantity) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const [affectedRows] = await cart.update(
        { quantity },
        { where: { UserId, ProductId } }
      );

      if (!affectedRows) {
        return res.status(404).json({ message: "Product not found in cart" });
      }

      res.status(200).json({ message: "Cart updated successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Error updating cart" });
    }
  }
}