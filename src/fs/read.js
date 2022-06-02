import fs from "fs";
import path from "path";

export const read = async () => {
  const __dirname = path.resolve();
  const pathFile = `${__dirname}/src/fs/files/fileToRead.txt`;
  fs.readFile(pathFile, "utf8", function (error, data) {
    if (error) {
      console.log("FS operation failed");
      throw error;
    }
    console.log(data);
  });
};

read();
