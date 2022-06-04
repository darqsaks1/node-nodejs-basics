import fs from "fs";
import path from "path";
//node src/fs/list.js

export const list = async () => {
  const __dirname = path.resolve();
  const pathFile = `${__dirname}/src/fs/files`;
  fs.readdirSync(pathFile).forEach(function (childItemName) {
    if (error) {
      console.log("FS operation failed");
      throw error;
    }
    console.log(childItemName);
  });
};

list();
