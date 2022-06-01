import fs from "fs";
import path from "path";

export const rename = async () => {
  const __dirname = path.resolve();
  const pathFile = `${__dirname}/src/fs/files/wrongFilename.txt`;
  const pathRename = `${__dirname}/src/fs/files/properFilename.md`;
  fs.rename(pathFile, pathRename, (err) => {
    if (err) {
      console.log("FS operation failed");
    }
  });
};

rename();
