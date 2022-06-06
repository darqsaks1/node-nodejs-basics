import fs from "fs";
import path from "path";
//node src/streams/write.js

export const write = async () => {
  const __dirname = path.resolve();
  const filePath = path.join(__dirname, "src/streams/files", "fileToWrite.txt");
  const stream = new fs.createWriteStream(filePath, { encoding: "utf-8" });
  process.stdin.on("data", (data) => {
    stream.write(data.toString());
  });
  process.on("SIGINT", process.exit);
};

write();
