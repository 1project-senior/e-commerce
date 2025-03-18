module.exports = (connection, DataTypes) => {
    const cart = connection.define(
      "cart",
      {
        quantity: {
          type: DataTypes.INTEGER
        }
      }
    );
    return cart;
  };
  