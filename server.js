const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const db_password = process.env.DB_PASS;
const database = process.env.DATABASE.replace("<PASSWORD>", db_password);

try {
  mongoose.connect(database);
  console.log("DB CONNECTION SUCCESS");
} catch (error) {
  console.log(`DB CONNECTION FAILED: ${error}`);
}

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`APP LISTENING TO PORT ${port}`);
});
