import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";

dotenv.config();

//mongo db connection
ConnectDB();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/inventory", inventoryRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Blood Bank App",
  });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Running on ${process.env.DEV_MODE}`);
});
