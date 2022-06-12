import * as fs from "node:fs";
import { access } from "node:fs/promises";
import path from 'path';



export const copyfile = async (filename, newfilename) => {

    var curPath = global.home; 
    curPath = path.join(curPath, filename);
    var newPath = global.home; 
    newPath = path.join(newPath, newfilename);

    try {


            const writeStream = fs.createWriteStream(newPath, 'utf-8');

            console.log('You are currently in ' + global.home);
            
            
        
    }catch (error) {
        console.error(error.message);
    } 
};


