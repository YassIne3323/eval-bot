const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const axios = require("axios");
const semver = require("semver");
const logger = require("./𝐒𝐘𝐒𝐓𝐄𝐌-𝐍𝐄𝐑𝐎/utils/log");
const express = require("express");
const gradient = require("gradient-string")
const logo = `
𝐂𝐇𝐀𝐓 𝐁𝐎𝐓✈
               𝐁𝐘 𝐘𝐀𝐒𝐒𝐈𝐍𝐄✈
`;

const c = ["#00FA9A","Blue"];
const yass = gradient("#00FA9A", "Blue");
console.log(yass("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■✈".repeat(1), { interpolation: "hsv" }));
const text = gradient(c).multiline(logo);
console.log(text);
console.log(yass("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■✈\n𝗟𝗢𝗔𝗗𝗜𝗡𝗚...".repeat(1), { interpolation: "hsv" }));



const app = express();
const port = process.env.PORT || 3078; 
app.get("/", (req, res) => {
  res.send(`N　E　R　O 🧸`);
});

function startBot(message) {
  (message) ? logger(message, "[ Starting ]") : "";

  const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "NERO.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true
  });

  child.on("close", (codeExit) => {
    if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
      startBot("Starting up...");
      global.countRestart += 1;
      return;
    } else return;
  });

  child.on("error", function(error) {
    logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
  });
};


  logger('𝗬 𝗔 𝗦 𝗦 𝗜 𝗡 𝗘　ツ', "[ NAME ]");
  logger("Version: 1.1.0", "[ VERSION ]");


startBot();

app.listen(port, () => {
  console.log(`bot running in port: ${port}`);
});
