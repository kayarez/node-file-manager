import * as fs from "node:fs";
import { access} from "node:fs/promises";
import path from 'path';


export const create = async (filename) => {

    var curPath = global.home; 
    curPath = path.join(curPath, filename);

    try {

        console.log('You are currently in ' + global.home);

        if(await exists(global.home)){
            const readStream = fs.createWriteStream(curPath, 'utf-8');  
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