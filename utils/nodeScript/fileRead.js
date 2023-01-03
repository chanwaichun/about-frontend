const fs = require("fs");
async function main() {
  console.log(__dirname);
  loopFile("F:\\project\\about-frontend");
}

async function loopFile(path) {
  const files = await fs.readdirSync(path);

  files.forEach(async (file) => {
    // console.log()
    const reg = /(.js|.vue)$/g;

    const currentPath = path + "\\" + file;
    if (reg.test(file) && file === "两数之和.js") {
      console.log(file);
      const content = await fs.readFileSync(currentPath, "utf-8");
    }
    const stat = await fs.lstatSync(currentPath);
    // console.log(file);
    // console.log(stat.isDirectory());
    if (stat.isDirectory()) {
      loopFile(currentPath);
    }
  });
}
main();
