import express from "express";
import cors from "cors";
import dynamicRoutes from "../routes/dynamicRoutes.js";
import docsRoute from "../routes/docsRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "MockForge API is running 🚀"
  });
});

app.use("/api", docsRoute);
app.use("/api", dynamicRoutes);

export default app;