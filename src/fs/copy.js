import fs from "fs";
import path from "path";

export const copy = async () => {
  const __dirname = path.resolve();
  const fileFolder = `${__dirname}/src/fs/files`;
  const copyFolder = `${__dirname}/src/fs/files_copy`;
  
  const recursionCopy = function (src, dest) {
    try {
      const exists = fs.existsSync(src);
      const existsDest = fs.existsSync(dest);
      const stats = exists && fs.statSync(src);
      const isDirectory = exists && stats.isDirectory();
      if (!existsDest) {
        if (exists && isDirectory) {
          fs.mkdirSync(dest);
          fs.readdirSync(src).forEach(function (item) {
            recursionCopy(
              path.join(src, item),
              path.join(dest, item)
            );
          });
        } else {
          fs.linkSync(src, dest);
        }
      }
      else {
          console.log('FS OPERATION FAILED')
      }
    } catch (error) {
      throw error;
    }
  };

  recursionCopy(fileFolder, copyFolder);
};

copy();
