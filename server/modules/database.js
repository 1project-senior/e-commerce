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

const db = {};
db.User = require("./tables/users")(connection, DataTypes);
db.Products = require("./tables/products")(connection, DataTypes);
db.Category = require("./tables/category")(connection, DataTypes);
db.cart = require("./tables/cart.js")(connection, DataTypes);
db.payment = require("./tables/payments.js")(connection, DataTypes);

// Associations
// User-Products many-to-many through cart
db.User.belongsToMany(db.Products, { through: "cart" });
db.Products.belongsToMany(db.User, { through: "cart" });

// Products-Category one-to-many
db.Category.hasMany(db.Products);
db.Products.belongsTo(db.Category);

// User-Payment one-to-many
db.User.hasMany(db.payment);
db.payment.belongsTo(db.User);

// Cart-Payment one-to-one
db.cart.hasOne(db.payment);
db.payment.belongsTo(db.cart);

// No need for explicit cart-Products relationship since it's handled by the many-to-many above

// connection
//   .sync({ force: true })
//   .then(() => console.log("tables are created"))
//   .catch((err) => {
//     throw err;
//   });

module.exports = db;