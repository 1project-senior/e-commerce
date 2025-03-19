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
  db.cart=require("./tables/cart.js")(connection,DataTypes)
  db.payment = require ("./tables/payments.js")(connection,DataTypes)
  // association betwen users(the admin) and products 
  db.User.belongsToMany(db.Products, { through : "cart"})
  db.Products.belongsToMany(db.User,{ through: "cart"})

  // association betwen products and category 
  db.Category.hasMany(db.Products)
  db.Products.belongsTo(db.Category)
  //  association between user and payment
  db.User.hasMany(db.payment )
  db.payment.belongsTo(db.User)
  // association between cart and payment
  db.cart.hasOne(db.payment )
  db.payment.belongsTo(db.cart)





  // connection
  // .sync({ force: true })
  // .then(() => console.log("tables are created"))
  // .catch((err) => {
  //   throw err;
  // });
  module.exports=db