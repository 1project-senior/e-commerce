module.exports = (connection, DataTypes) => {
  const cart = connection.define(
      "cart",
      {
          id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
          },
          UserId: {
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                  model: 'users', // اسم الجدول في قاعدة البيانات
                  key: 'id'
              }
          },
          ProductId: {
              type: DataTypes.INTEGER,
              allowNull: false,
              references: {
                  model: 'products', // اسم الجدول في قاعدة البيانات
                  key: 'id'
              }
          },
          quantity: {
              type: DataTypes.INTEGER,
              defaultValue: 1,
              validate: {
                  min: 1
              }
          }
      },
      {
          timestamps: true // إلغاء الحقول التلقائية createdAt و updatedAt
      }
  );
  return cart;
};
