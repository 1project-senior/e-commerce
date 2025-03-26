module.exports = (connection, DataTypes) => {
    const User = connection.define(
      "User",
      {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
        validate: {
          isEmail: true, 
        },
      },
      name: {
        type: DataTypes.STRING,
       
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("user", "admin"),
        defaultValue: "user",
      },
      address: {
        type: DataTypes.STRING,
        
      },
      phone: {
        type: DataTypes.INTEGER,
      
      },
      // resetPasswordToken: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      // resetPasswordExpires: {
      //   type: DataTypes.DATE,
      //   allowNull: true,
      // }
    }
    
    );
    return User;
  };