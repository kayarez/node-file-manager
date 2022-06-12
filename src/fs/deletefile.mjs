import { access, rm } from "node:fs/promises";
import path from 'path';


export const deletefile = async (filename) => {

    var curPath = global.home; 
    curPath = path.join(curPath, filename);


    try {

        if (await exists(curPath)){

            console.log('You are currently in ' + global.home);
            rm(curPath);

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