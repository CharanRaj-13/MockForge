import loadConfig from "../config/loadConfig.js";

import generateUsers from "../generator/userGenerator.js";
import generateProducts from "../generator/productGenerator.js";

const config = loadConfig();

const generators = {
  users: generateUsers,
  products: generateProducts,
};

const database = {};

Object.keys(config).forEach((key) => {

  const generator = generators[key];

  if (generator) {
    database[key] = generator(config[key]);
  }

});

export default database;