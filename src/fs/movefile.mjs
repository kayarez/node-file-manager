import { getDirname} from "../utils/getDirname.mjs";
import { rl } from "../utils/readline.mjs";
import * as fs from "node:fs";
import { access, rm } from "node:fs/promises";
import * as streams from "stream/promises"
import path from 'path';
import { dirname } from "node:path";


export const movefile = async (filename, newfilename) => {

    var curPath = global.home; 
    curPath = path.join(curPath, filename);
    var newPath = global.home; 
    newPath = path.join(newPath, newfilename);
    console.log(curPath);

    try {

            console.log('You are currently in ' + global.home);
            if(access(curPath)){
                const writeStream = fs.createWriteStream(newPath, 'utf-8');
                rm(curPath);
            }

            console.log ("move successful");
            
            
        
    }catch (error) {
        console.error(error.message);
    } 
};
