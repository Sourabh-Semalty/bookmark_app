import express from "express";
import connectDB from "./config/db";

const PORT = 5000;
const app = express();

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening to ${PORT}`);
    });
  })
  .catch(console.log);
