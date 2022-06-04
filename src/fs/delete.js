import fs from "fs";
import path from "path";

//node src/fs/remove.js
export const remove = async () => {
  const __dirname = path.resolve();
  const pathFile = `${__dirname}/src/fs/files/fileToRemove.txt`;

  fs.unlink(pathFile, (err) => {
    if (err) {
      console.log("FS operation failed");
      throw err;
    }
  });
};

remove();
