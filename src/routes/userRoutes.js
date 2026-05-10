import express from "express";
import generateUsers from "../generator/userGenerator.js";

const router = express.Router();

router.get("/users", async (req, res) => {
    const count = parseInt(req.query.count) || 10;

    const delay = parseInt(req.query.delay) || 0;

    const shouldError = req.query.error === "true";

    // Simulate Delay
    await new Promise((resolve) => 
        setTimeout(resolve, delay)
    );

    // Simulate Server Error
    if (shouldError) {
        return res.status(500).json({
            success: false,
            error: "Simulated server error"
        });
    }
    const users = generateUsers(count);

  res.json({
    success: true,
    count: users.length,
    data: users
  });
});

export default router;