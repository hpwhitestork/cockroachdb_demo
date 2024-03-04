const express = require("express");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const db = require("./model/bankModel");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/cockRoach", userRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
