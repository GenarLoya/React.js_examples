import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://admin:h3re1920gr3#2104@172.17.0.3/merndb");
    console.log(
      `MongoDB conection ${conn.connection.host} ${conn.connection.name}`
    );
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
  }
};
