import zlib from "zlib";
import fs from "fs";
import path from "path";
//node src/zip/compress.js
export const compress = async () => {
  try {
    const stream = fs.createReadStream(
      path.join(path.resolve(), "src/zip/files", "fileToCompress.txt")
    );
    const write = fs.createWriteStream(
      path.join(path.resolve(), "src/zip/files", "archive.gz")
    );
    stream.pipe(zlib.createGzip()).pipe(write);
  } catch (error) {
    throw new Error(error);
  }
};

compress();
