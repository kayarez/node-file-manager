import * as fs from "node:fs/promises";
import path from 'path';



export const deletefile = async (filename) => {

    var curPath = global.home; 
    curPath = path.join(curPath, filename);
    console.log(curPath);

    try {

            console.log('You are currently in ' + global.home);
            fs.rm(curPath);
            console.log ("delete successful");
            
        
    }catch (error) {
        console.error(error.message);
    } 
};