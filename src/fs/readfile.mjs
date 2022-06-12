import * as fs from "node:fs";
import path from 'path';



export const read = async (filename) => {

    var curPath = global.home; 
    curPath = path.join(curPath, filename);
    console.log(curPath);

    try {

            console.log('You are currently in ' + global.home);
            const readStream = fs.createReadStream(curPath, 'utf-8');
            readStream.on('data', chunk => process.stdout.write(chunk));      
            
        
    }catch (error) {
        console.error(error.message);
    } 
};
