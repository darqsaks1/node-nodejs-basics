import { Transform } from "stream";
//node src/streams/transform.js

export const transform = async () => {
  const transformStream = new Transform();
  transformStream._transform = (chunk, encoding = "utf-8", callback) => {
    const buffered = chunk.toString();
    const reversed = `${buffered.split("").reverse().join("")}\n`;
    transformStream.push(reversed);
    callback();
  };

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

transform();
