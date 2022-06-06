import { Worker } from "worker_threads";
import os from "os";
//node src/wt/main.js
export const performCalculations = async () => {
  const cp = [];
  const path = "./src/wt/worker.js";
  os.cpus().forEach((elem, index) => {
    cp.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(path, {
          workerData: index + 10,
        });
        worker.on("message", (value) => {
          resolve(value);
        });
        worker.on("error", () => reject(null));
      })
    );
  });
  console.log(await Promise.all(cp));
};
performCalculations();
