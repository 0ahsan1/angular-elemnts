const fs = require('fs-extra')
const concat = require("concat");
(async function build() {
  const files = [
    './dist/angular-elemnts/runtime.js',
    './dist/angular-elemnts/polyfills.js',
    './dist/angular-elemnts/main.js',
  ]
  await fs.ensureDir('./dist/angular-elemnts/elements')
  await concat(files,'./dist/angular-elemnts/elements/main.js')
})()
