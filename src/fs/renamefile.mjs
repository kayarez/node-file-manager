import { access } from "node:fs";
import * as fs from "node:fs/promises";
import path from 'path';



export const renamefile = async (filename, newfilename) => {

    var curPath = global.home; 
    curPath = path.join(curPath, filename);
    var newPath = global.home; 
    newPath = path.join(newPath, newfilename);

    try {

        console.log('You are currently in ' + global.home);

            
            await fs.rename(curPath, newPath); 

            
        
    }catch (error) {
        console.error(error.message);
    } 
};

