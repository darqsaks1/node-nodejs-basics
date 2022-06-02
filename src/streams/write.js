import fs from "fs";
import path from "path";
export const write = async () => {
  const __dirname = path.resolve();
  const filePath = path.join(__dirname, "src/streams/files", "fileToWrite.txt");
  const stream = new fs.WriteStream(filePath, { encoding: "utf-8" });
  process.stdin.on("data", (data) => {
    stream.write(data.toString());
  });
  process.on("SIGINT", process.exit);
};

write();
