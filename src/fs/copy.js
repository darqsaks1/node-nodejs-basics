import fs from "fs";
import path from "path";

export const copy = async () => {
  const __dirname = path.resolve();

  const fileFolder = `${__dirname}/src/fs/files`;
  const copyFolder = `${__dirname}/src/fs/files_copy`;
  const copyFolder = function (src, dest) {
    const exists = fs.existsSync(src);
    const existsDest = fs.existsSync(dest);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (!existsDest) {
      if (exists && isDirectory) {
        fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(function (childItemName) {
            copyFolder(
            path.join(src, childItemName),
            path.join(dest, childItemName)
          );
        });
      } else {
        fs.linkSync(src, dest);
      }
    } else {
      console.log("FS operation failed");
    }
  };

  copyRecursiveSync(fileFolder, copyFolder);
};

copy();
