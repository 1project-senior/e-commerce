const { cart,Product } = require("../modules/database.js");
const db = require("../modules/database.js");

module.exports = {
   getAllCartProducts : async (req, res) => {
    try {
      const { UserId } = req.params;
  
      if (!UserId) {
        return res.status(400).json({ message: "UserId is required" });
      }
  
      const user = await db.User.findByPk(UserId, {
        include: [{
          model: db.Products,
          through: { attributes: [] }, // Exclude junction table attributes if not needed
          attributes: ['id', 'name', 'description', 'price', 'stock', 'image'],
        }],
      });
  
      if (!user || !user.Products || user.Products.length === 0) {
        return res.status(404).json({ message: "No products found in cart" });
      }
  
      res.status(200).json(user.Products);
    } catch (error) {
      console.log("Error in getAllCartProducts:", error);
      res.status(500).json({ message: "Error fetching cart products", error: error.message });
    }
  }
  
,



  removeProduct: async (req, res) => {
    try {
      const { UserId, ProductId } = req.body;

      await cart.destroy({
        where: { UserId, ProductId },
      });
    } catch (error) {
      console.log("err",error);
      
      res.status(500).json(error);
    }
  },
  
  addProducttoCart: async (req, res) => {
    try {
      const { UserId, ProductId, quantity } = req.body;

      // Check if the product is already in the cart
      const existingProduct = await cart.findOne({ where: { UserId, ProductId } });

      if (existingProduct) {
        // Update the quantity if product exists
        await existingProduct.update({ quantity: existingProduct.quantity + quantity });
        return res.status(200).json({ message: "Product quantity updated in cart" });
      }

      // If product does not exist, create a new cart entry
      await cart.create({ UserId, ProductId, quantity });
      res.status(201).json({ message: "Product added to cart" });

    } catch (error) {
      console.log("err",error);
      
      res.status(500).json(error );
    }
  },
  updateCartProducts: async (req, res) => {
    try {
      const { UserId, ProductId, quantity } = req.body;

      // Check if the product exists in the cart
      const existingProduct = await cart.findOne({ where: { UserId, ProductId } });

      if (!existingProduct) {
        return res.status(404).json({ message: "Product not found in cart" });
      }

      // Update the quantity of the existing product
      await existingProduct.update({ quantity });

      res.status(200).json({ message: "Cart product updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error updating cart product", error });
    }
  }
};
