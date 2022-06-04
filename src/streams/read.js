import fs from "fs";
import path from "path";
//node src/streams/read.js

export const read = async () => {
  const __dirname = path.resolve();
  const filePath = path.join(__dirname, "src/streams/files", "fileToRead.txt");
  const stream = new fs.createReadStream(filePath);
  stream.on("readable", async () => {
    const data = await stream.read();
    if (data) {
      const buffered = data.toString();
      process.stdout.write(`${buffered}\n`);
    }
  });
};
read();
