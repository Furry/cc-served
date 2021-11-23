import { WorkingDir } from "./static"
import * as Express from "express";
import * as fs from "fs";
import * as path from "path";
import { generateScript } from "./scripts";

const server = Express.default();

server.get("/*", (req, res) => {
    let location = path.join(
        WorkingDir,
        path.normalize(req.url)
    );
    location += location.endsWith(".lua") ? "" : ".lua";

    console.log(location);
    if (fs.existsSync(location)) {
        res.send(generateScript(location));
    }

    res.send("OK");
})

server.listen(8080, () => {
    console.log("listening")
})