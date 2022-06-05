import { Transform } from "stream";
//node src/streams/transform.js

export const transform = async () => {
  const transformStream = new Transform();
  transformStream._transform = (chunk, encoding = "utf-8", callback) => {
    transformStream.push(`${chunk.toString().split("").reverse().join("")}\n`);
    callback();
  };

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

transform();
