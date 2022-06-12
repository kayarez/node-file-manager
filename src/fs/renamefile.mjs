import { getDirname} from "../utils/getDirname.mjs";
import { rl } from "../utils/readline.mjs";
import * as fs from "node:fs/promises";
import * as streams from "stream/promises"
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from "node:path";


export const renamefile = async (filename, newfilename) => {

    var curPath = global.home; 
    curPath = path.join(curPath, filename);
    var newPath = global.home; 
    newPath = path.join(newPath, newfilename);
    console.log(curPath);

    try {

            console.log('You are currently in ' + global.home);
            await fs.rename(curPath, newPath); 
            console.log ("Rename successful");
            
        
    }catch (error) {
        console.error(error.message);
    } 
};
