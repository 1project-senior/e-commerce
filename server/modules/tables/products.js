module.exports = (connection, DataTypes) => {
    const Products = connection.define(
      "Products",
      {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {timestamps:false}

    
    );
    return Products;
  };