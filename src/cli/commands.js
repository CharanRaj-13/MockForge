import { Command } from "commander";

import fs from "fs";

const program = new Command();

program
  .name("mockforge")
  .description("Dynamic API mocking framework 🚀")
  .version("1.0.0");


// =========================
// START COMMAND
// =========================

program
  .command("start")
  .description("Start MockForge server")
  .action(async () => {

    const { default: app } =
      await import("../server/server.js");

    const PORT = 5000;

    app.listen(PORT, () => {
      console.log(`🚀 MockForge running on port ${PORT}`);
    });

  });


// =========================
// INIT COMMAND
// =========================

program
  .command("init")
  .description("Create default config file")
  .action(() => {

    const defaultConfig = {
      users: 10,
      products: 20
    };

    fs.writeFileSync(
      "mockforge.config.json",
      JSON.stringify(defaultConfig, null, 2)
    );

    console.log(
      "✅ mockforge.config.json created"
    );

  });


// =========================
// HELP COMMAND
// =========================

program
  .command("helpme")
  .description("Show available commands")
  .action(() => {

    console.log(`
🚀 MockForge Commands

mockforge start     Start server
mockforge init      Create config file
mockforge helpme    Show help
mockforge --version Show version
    `);

  });

program.parse();