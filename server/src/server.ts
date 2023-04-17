import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import register from "../controllers/register";

dotenv.config();

const port = process.env.PORT;

const app: Express = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/register", register);

mongoose
  .connect(process.env.CONNECTION_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.error(err));
