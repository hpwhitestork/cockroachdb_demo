// const { createConnection } = require("typeorm");
// const { Bank } = require("./model/bankModel");

// const connString1 = "postgresql://root@localhost:26257/bank?sslmode=disable";
// const connString2 = "postgresql://root@localhost:26258/bank?sslmode=disable";
// const connString3 = "postgresql://root@localhost:26259/bank?sslmode=disable";

// let conn;
// async function connectionDone() {
//   try {
//     const connection = await createConnection({
//       type: "postgres",
//       url: connString1,
//       synchronize: false,
//       entities: { Bank },
//       logging: true,
//     });
//     console.log("Connected to PostgreSQL");
//     conn = connection;
//     return connection;
//   } catch (err) {
//     console.err("Error connecting to PostgreSQL:", err);
//   }
// }
// connectionDone();

// module.exports = { conn, connectionDone };

// const { sequelize } = require("./model/bankModel");

// async function connectionDone() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connected to PostgreSQL");
//     await sequelize.sync();
//   } catch (err) {
//     console.error("Error connecting to PostgreSQL:", err);
//   }
// }

// connectionDone();

// module.exports = { sequelize, connectionDone };
// connection.js
const { sequelize } = require("./model");

async function connectionDone() {
  try {
    await sequelize.authenticate();
    console.log("Connected to PostgreSQL");
    await sequelize.sync(); // Sync the defined models with the database
  } catch (err) {
    console.error("Error connecting to PostgreSQL:", err);
  }
}

// Set the logging option to console.log or a custom function
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to PostgreSQL");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL:", err);
  });

connectionDone();

module.exports = { sequelize, connectionDone };
