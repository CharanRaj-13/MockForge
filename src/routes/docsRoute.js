import express from "express";

import loadConfig from "../config/loadConfig.js";

const router = express.Router();

const config = loadConfig();

router.get("/docs", (req, res) => {

  const routes = Object.keys(config).map((routeName) => {

    return {
      route: `/api/${routeName}`,

      methods: [
        "GET",
        "POST",
        "PUT",
        "DELETE"
      ],

      examples: {
        get: `/api/${routeName}`,
        count: `/api/${routeName}?count=5`,
        delay: `/api/${routeName}?delay=3000`,
        error: `/api/${routeName}?error=true`
      }
    };

  });

  res.json({
    success: true,
    project: "MockForge ",
    version: "1.0.0",
    availableRoutes: routes
  });

});

export default router;