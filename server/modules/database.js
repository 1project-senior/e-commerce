const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize("furniture", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
connection
  .authenticate()
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    throw err;
  });


  const db={}
  db.User=require("./tables/users")(connection,DataTypes)
  db.Products=require("./tables/products")(connection,DataTypes)
  db.Category=require("./tables/category")(connection,DataTypes)

  // association betwen users(the admin) and products 
  db.User.hasMany(db.Products, { foreignKey: "userId", as: "products" })
  db.Products.belongsTo(db.User,{ foreignKey: "userId", as: "admin" })

  // association betwen products and category 
  db.Category.hasMany(db.Products, { foreignKey: "categoryId", as: "products" })
  db.Products.belongsTo(db.Category,{ foreignKey: "categoryId", as: "category" })



  // connection
  // .sync({ force: true })
  // .then(() => console.log("tables are created"))
  // .catch((err) => {
  //   throw err;
  // });
  module.exports=db
