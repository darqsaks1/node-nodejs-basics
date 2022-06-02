import fs from "fs";
import path from "path";
export const read = async () => {
  const __dirname = path.resolve();
  const filePath = path.join(__dirname, "src/streams/files", "fileToRead.txt");
  const stream = new fs.ReadStream(filePath);
  stream.on("readable", async () => {
    const data = await stream.read();
    if (data) {
      const buffered = data.toString();
      process.stdout.write(`${buffered}\n`);
    }
  });
};
read();
