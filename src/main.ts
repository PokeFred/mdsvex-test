import { existsSync, rmdirSync, mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const INPUT: string = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
</html>
`

async function main(): Promise<void> {
    const path: string = "./build"

    if (existsSync(path)) rmdirSync(path, { recursive: true })
    mkdirSync(path)
    writeFileSync(join(path, "index.html"), INPUT, { encoding: "utf-8" })
}

main()
