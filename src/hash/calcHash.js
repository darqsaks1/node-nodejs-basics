import path from "path";
import fs from "fs";
import crypto from "crypto";
//node src/hash/calcHash.js

export const calculateHash = async () => {
  try {
    const data = crypto.createHash("sha256").update("", "utf-8");
    const dataHex = data.digest("hex");
    fs.writeFile(
      path.join(
        `${path.resolve()}/src/hash`,
        "files",
        "fileToCalculateHashFor.txt"
      ),
      dataHex,
      function (err) {
        if (err) throw err;
      }
    );
    console.log(dataHex);
    return dataHex;
  } catch (e) {
    throw e;
  }
};

calculateHash();
