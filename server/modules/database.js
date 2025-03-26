const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize("furniture", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: true,
  },
  logging: false,
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

// Many-to-Many: User-Products through cart
db.User.belongsToMany(db.Products, {
  through: db.cart,
  foreignKey: "UserId",
});

db.Products.belongsToMany(db.User, {
  through: db.cart,
  foreignKey: "ProductId",
});

// Add explicit cart-Products relationship
db.cart.belongsTo(db.Products, {
  foreignKey: "ProductId", // Matches the foreign key in cart table
});

db.Products.hasMany(db.cart, {
  foreignKey: "ProductId",
});

// Products-Category one-to-many
db.Category.hasMany(db.Products);
db.Products.belongsTo(db.Category);

// User-Payment one-to-many
db.User.hasMany(db.payment);
db.payment.belongsTo(db.User);

// Uncomment to sync database (use with caution in production)
// connection
//   .sync({ force: true })
//   .then(() => console.log("tables are created"))
//   .catch((err) => {
//     throw err;
//   });

module.exports = db;