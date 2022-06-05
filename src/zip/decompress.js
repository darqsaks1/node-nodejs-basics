import zlib from "zlib";
import fs from "fs";

import path from "path";
//node src/zip/decompress.js

export const decompress = async () => {
  try {
    const stream = fs.createReadStream(
      path.join(path.resolve(), "src/zip/files", "archive.gz")
    );
    const write = fs.createWriteStream(
      path.join(path.resolve(), "src/zip/files", "fileToCompress.txt")
    );
    stream.pipe(zlib.createUnzip()).pipe(write);
  } catch (error) {
    throw new Error(error);
  }
};

decompress();
