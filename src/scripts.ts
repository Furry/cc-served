import * as fs from "fs";
import * as path from "path";
import { WorkingDir } from "./static";

export function generateScript(file: string) {
    const contents = fs.readFileSync(path.join(WorkingDir, file));
    console.log(contents);
    return ""
}