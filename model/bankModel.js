// models/user.js

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define("User", {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     age: DataTypes.INTEGER,
//   });

//   return User;
// };
// const { EntitySchema } = require("typeorm");
// const Bank = new EntitySchema({
//   name: "Bank",
//   columns: {
//     id: {
//       type: "bigint",
//       primary: true,
//       generated: "increment",
//     },
//     name: {
//       type: "varchar",
//       nullable: false,
//     },
//     balance: {
//       type: "bigint",
//       nullable: false,
//     },
//   },
// });
// module.exports = { Bank };

const { DataTypes, Sequelize } = require("sequelize");

const sequelize = new Sequelize("bank", "root", "", {
  dialect: "postgres",
  host: "localhost",
  port: 26257,
  logging: false,
  define: {
    timestamps: false,
  },
});

const Bank = sequelize.define(
  "Bank",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "bank",
  }
);

module.exports = { Bank, sequelize };
