import mongoose from "mongoose";
import config from "../../config.js";

try {
  await mongoose.connect(config.mongo_uri);
  console.log("Conectado a la base de datos");
} catch (error) {
  console.log(`Error conectando a la base de datos: ${error.message}`);
}
