import express from "express";
import cors from "cors";
import { usersRouter } from "./router/usersRouter.js";

const app = express();
const port = process.env.PORT || 3033;

app.use(express.json());
app.use(cors());
app.use("/", usersRouter);
app.listen(port, () => console.log(`http://localhost:${port}`));
