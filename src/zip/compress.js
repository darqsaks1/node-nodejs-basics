import zlib from "zlib";
import fs from "fs";
import path from "path";
//node src/zip/compress.js
export const compress = async () => {
  try {
    const __dirname = path.resolve();
    const filePath = path.join(
      __dirname,
      "src/zip/files",
      "fileToCompress.txt"
    );
    const gzPath = path.join(__dirname, "src/zip/files", "archive.gz");
    const gzip = zlib.createGzip();
    const stream = fs.createReadStream(filePath);
    const zip = fs.createWriteStream(gzPath);
    stream.pipe(gzip).pipe(zip);
  } catch (error) {
    throw new Error(error);
  }
};

compress();
