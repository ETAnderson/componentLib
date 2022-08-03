//https://openbase.com/js/pixelmatch/documentation\
//https://observablehq.com/@mourner/pixelmatch-demo

// to be used to potentially compress new and old images together for the sketchpad function

//image files must be the same size, so generating them programatically should insure uniform inputs and nomenclature

const fs = require("fs");
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");

const img1 = PNG.sync.read(fs.readFileSync("img1.png"));
const img2 = PNG.sync.read(fs.readFileSync("img2.png"));
const { width, height } = img1;
const diff = new PNG({ width, height });

pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });

fs.writeFileSync("diff.png", PNG.sync.write(diff));
