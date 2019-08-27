const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/feedback/runtime-es5.js',
'./dist/feedback/polyfills-es5.js',
'./dist/feedback/scripts.js',
'./dist/feedback/main-es5.js',
]
await fs.ensureDir('feedback')
await concat(files, 'feedback/feedback.js');
})()