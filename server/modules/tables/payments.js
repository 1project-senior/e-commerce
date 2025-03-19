module.exports = (connection, DataTypes) => {
    const payment = connection.define(
      "payment",
      {
        amount: {
          type: DataTypes.DECIMAL
        },
        status : {
            type : DataTypes.ENUM('pending', 'completed', 'failed')
        }
      }
    );
    return payment;
  };