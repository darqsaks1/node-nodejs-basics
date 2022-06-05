import process from "process";
import path from "path";
import { fork } from "child_process";
//node src/cp/cp.js

export const spawnChildProcess = async (args) => {
  try {
    const __dirname = path.resolve();
    const filePath = path.join(__dirname, "src/cp/files", "script.js");
    args.length = 0;
    fork(filePath, args);
  } catch (error) {
    throw error;
  }
};
spawnChildProcess(process.argv);
