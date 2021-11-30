import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3025;
app.use(express.json());

const mongoConnectionsString = "mongodb://localhost:27017/loginApi";
mongoose.connect(mongoConnectionsString);
app.use(cors());

const userSchema = mongoose.Schema(
  {
    login: String,
    password: String,
  },
  { versionKey: false }
);
const UserModel = mongoose.model("User", userSchema, "usersInfo");

app.get("/", async (req, res) => {
  const users = await UserModel.find({})
    .select("login password")
    .sort({ _id: -1 });
  res.json(users);
});

app.post("/signup", async (req, res) => {
  const user = req.body.user;
  console.log(req.body);
  console.log(user);
  const user1 = new UserModel(user);
  user1.save((err, docs) => {
    if (err) {
      res.status(500).send({ err });
    } else {
      res.json(docs);
    }
  });
});

app.post("/nnn", (req, res) => {
  console.log(req.body.user);
  res.send("ok");
});

app.listen(port, () => {
  console.log(`listen on http://localhost:${port}`);
});


