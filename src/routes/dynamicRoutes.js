import express from "express";
import crypto from "crypto";

import loadConfig from "../config/loadConfig.js";

import generateUsers from "../generator/userGenerator.js";
import generateProducts from "../generator/productGenerator.js";

import database from "../database/memoryDB.js";

const router = express.Router();

const config = loadConfig();

const generators = {
  users: generateUsers,
  products: generateProducts,
};

Object.keys(config).forEach((routeName) => {

  // =========================
  // GET ALL DATA
  // =========================

  router.get(`/${routeName}`, async (req, res) => {

    const count =
      parseInt(req.query.count) ||
      config[routeName];

    const delay =
      parseInt(req.query.delay) || 0;

    const shouldError =
      req.query.error === "true";

    // Simulate network delay
    await new Promise((resolve) =>
      setTimeout(resolve, delay)
    );

    // Simulate server error
    if (shouldError) {
      return res.status(500).json({
        success: false,
        error: "Internal Server Error 💥"
      });
    }

    const data = database[routeName].slice(0, count);

    res.json({
      success: true,
      route: routeName,
      count: data.length,
      data
    });

  });

  // =========================
  // CREATE NEW ITEM
  // =========================

  router.post(`/${routeName}`, (req, res) => {

    const newItem = {
      id: crypto.randomUUID(),
      ...req.body
    };

    database[routeName].push(newItem);

    res.status(201).json({
      success: true,
      message: `${routeName.slice(0, -1)} created`,
      data: newItem
    });

  });

  // =========================
  // UPDATE ITEM
  // =========================

  router.put(`/${routeName}/:id`, (req, res) => {

    const { id } = req.params;

    const data = database[routeName];

    const itemIndex = data.findIndex(
      (item) => item.id === id
    );

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        error: "Item not found"
      });
    }

    data[itemIndex] = {
      ...data[itemIndex],
      ...req.body
    };

    res.json({
      success: true,
      message: "Item updated",
      data: data[itemIndex]
    });

  });

  // =========================
  // DELETE ITEM
  // =========================

  router.delete(`/${routeName}/:id`, (req, res) => {

    const { id } = req.params;

    const data = database[routeName];

    const itemIndex = data.findIndex(
      (item) => item.id === id
    );

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        error: "Item not found"
      });
    }

    const deletedItem =
      data.splice(itemIndex, 1);

    res.json({
      success: true,
      message: "Item deleted",
      data: deletedItem[0]
    });

  });

});

export default router;