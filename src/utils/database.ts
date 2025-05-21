import mongoose from "mongoose";

import { DATABASE_UR } from "./env";

const connect = async () => {
  try {
    await mongoose.connect(DATABASE_UR, {
      dbName: "db-acara",
    });
    return Promise.resolve("Database connected");
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connect;
