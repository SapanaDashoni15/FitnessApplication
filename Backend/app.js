import express from "express";
import { config } from "dotenv";

const app = express();

config({ path: "./config.env" });

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
