removeProduct: async (req, res) => {
  try {
    const { UserId } = req.params; // Get from URL
    const { ProductId } = req.body; // Get from body

    await cart.destroy({
      where: { UserId, ProductId },
    });
    
    res.status(200).json({ message: "Product removed from cart" });
    
  } catch (error) {
    console.log("err",error);
    res.status(500).json(error);
  }
},"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "resetPasswordToken", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("Users", "resetPasswordExpires", {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "resetPasswordToken");
    await queryInterface.removeColumn("Users", "resetPasswordExpires");
  },
};