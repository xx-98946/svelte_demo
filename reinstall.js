const fs = require("fs")
const path = require("path")
const child_process = require('child_process');

fs.promises.readdir(".").then(dirs => {
    dirs.forEach(dir => {
        if (/^\d/.exec(dir)) {
            const cwd = path.join(process.cwd(), dir)
            child_process.spawn("pnpm", ["install"], { cwd, shell: true })
        }
    })
})