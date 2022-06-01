import fs from "fs";
import path from "path";

export const create = async () => {
  const __dirname = path.resolve();
  const file = `${__dirname}/src/fs/files/fresh.txt`;
  fs.stat(file, function (err) {
    if (err) {
      fs.writeFile(file, "I am fresh and young", (err) => {
        if (err) throw err;
      });
    } else {
      console.log("FS operation failed");
    }
  });
};

create();
