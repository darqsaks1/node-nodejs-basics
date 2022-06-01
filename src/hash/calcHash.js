import path from "path";
import fs from "fs";
import crypto from "crypto";

export const calculateHash = async () => {
  try {
    const __dirname = path.resolve();
    const filePath = path.join(
      `${__dirname}/src/hash`,
      "files",
      "fileToCalculateHashFor.txt"
    );
    const hash = crypto.createHash("sha256");
    const data = hash.update("", "utf-8");
    const dataHex = data.digest("hex");
    fs.writeFile(filePath, dataHex, function (err) {
      if (err) throw err;
    });
    console.log(dataHex);
    return dataHex;
  } catch (e) {
    throw e;
  }
};

calculateHash();
