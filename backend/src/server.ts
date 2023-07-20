import express, { urlencoded } from "express";
import cors from "cors";
import bookmark from "./routes/bookmark";
import connectDB from "./config/db";

const app = express();
const PORT = 5000;

// middleware
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.urlencoded());
app.use(express.json());
app.use("/api/bookmark", bookmark);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening to ${PORT}`);
    });
  })
  .catch(console.log);
