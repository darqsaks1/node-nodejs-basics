import path, { dirname } from "path";
import { createServer as createServerHttp } from "http";
import { fileURLToPath } from "url";
import { release, version } from "os";
import { createRequire } from "module";
import "./files/c.js";

const module = createRequire(import.meta.url);

export let unknownObject;

const random = Math.random();
if (random > 0.5) {
  unknownObject = module("./files/a.json");
} else {
  unknownObject = module("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(
  `Path to current directory is ${dirname(fileURLToPath(import.meta.url))}`
);

export const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});
