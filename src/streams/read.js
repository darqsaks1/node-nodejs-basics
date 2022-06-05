import fs from "fs";
import path from "path";
//node src/streams/read.js

export const read = async () => {
  const __dirname = path.resolve();
  const stream = new fs.createReadStream(
    path.join(__dirname, "src/streams/files", "fileToRead.txt")
  );
  stream.on("readable", async () => {
    const data = await stream.read();
    data && process.stdout.write(`${data.toString()}\n`);
  });
};
read();
