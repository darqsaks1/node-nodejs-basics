import process from "process";

//node src/cli/args.js


export const parseArgs = () => {
  try {
    const arg = process.argv;
    let result = "";
    for (let i = 0; i < arg.length; i++) {
      if (arg[i].startsWith("--")) {
        console.log(arg[i]);
        result += `${arg[i]} is ${arg[i + 1]}, `;
      }
    }
    console.log(result.replace(/-/gi, ""));
  } catch (e) {
    if (e) throw e;
  }
};

parseArgs();
