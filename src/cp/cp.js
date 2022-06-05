import process from "process";
import path from "path";
import { fork } from "child_process";
//node src/cp/cp.js

export const spawnChildProcess = async (args) => {
  try {
    args.length = 0;
    fork(path.join(path.resolve(), "src/cp/files", "script.js"), args);
  } catch (error) {
    throw error;
  }
};
spawnChildProcess(process.argv);
