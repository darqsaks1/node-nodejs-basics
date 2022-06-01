import fs from "fs";
import path from "path";

export const list = async () => {
  const __dirname = path.resolve();
  const pathFile = `${__dirname}/src/fs/files`;
  fs.readdirSync(pathFile).forEach(function (childItemName) {
    if (error) {
      console.log("FS operation failed");
      return;
    }
    console.log(childItemName);
  });
};

list();
