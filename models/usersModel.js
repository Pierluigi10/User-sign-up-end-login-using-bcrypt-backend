import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
  {
    userName: String,
    hash: String,
    email: String,
  },
  {
    versionKey: false,
  }
);

const usersModel = mongoose.model("user", usersSchema, "users");

export default usersModel;