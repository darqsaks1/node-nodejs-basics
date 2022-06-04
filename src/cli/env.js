import { env } from "process";
//node src/cli/env.js

export const parseEnv = () => {
  try {
    const keys = Object.entries(env);
    let result = "";
    const filteredMatrix = [];
    keys.forEach((item) => {
      if (item[0].startsWith("RSS_")) {
        filteredMatrix.push(item);
      }
    });

    filteredMatrix.forEach((item) => {
      result += `${item[0]}=${item[1]}; `;
    });
    console.log(result.substring(0, result.length - 1));
  } catch (err) {
    throw new Error(err);
  }
};

parseEnv();
