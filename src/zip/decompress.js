import zlib from "zlib";
import fs from "fs";

import path from "path";
//node src/zip/decompress.js

export const decompress = async () => {
  try {
    const __dirname = path.resolve();
    const filePath = path.join(__dirname, "src/zip/files", "archive.gz");
    const gzPath = path.join(__dirname, "src/zip/files", "fileToCompress.txt");

    const gzip = zlib.createGunzip();
    const stream = fs.createReadStream(filePath);
    const write = fs.createWriteStream(gzPath);
    stream.pipe(gzip).pipe(write);
  } catch (error) {
    throw new Error(error);
  }
};

decompress();
