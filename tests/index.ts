import fs from "fs";

fs.readdirSync(__dirname)
  .filter((value) => {
    return !value.includes("index.") && !value.includes(".map"); //过滤自身
  })
  .map((value) => require("./" + value));

export {};
