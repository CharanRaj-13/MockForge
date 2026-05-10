import fs from "fs";

function loadConfig() {

    const rawData = fs.readFileSync(
        "./mockforge.config.json",
        "utf-8"
    );

    return JSON.parse(rawData);
}

export default loadConfig;