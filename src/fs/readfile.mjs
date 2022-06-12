import * as fs from "node:fs";
import path from 'path';
import { access} from "node:fs/promises";



export const read = async (filename) => {

    var curPath = global.home; 
    curPath = path.join(curPath, filename);


    try {

            console.log('You are currently in ' + global.home);
            if(await exists(curPath)){
            const readStream = fs.createReadStream(curPath, 'utf-8');
            readStream.on('data', chunk => process.stdout.write(chunk));     
            }
            else{
                throw new Error("Operation failed"); 
            } 
            
        
    }catch (error) {
        console.error(error.message);
    } 
};

const exists = async(path) =>{
    
    try {

        await access(path);
        return true;
        
    } catch  {
        return false;
    }
    
};
