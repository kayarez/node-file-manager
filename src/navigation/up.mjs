import * as path from "path"
import { access } from "fs/promises";

const upOp = async() => {
    var curPath = path.dirname(global.home);

    try{
        if(await exists(curPath))
           {
            global.home = curPath;
            console.log('You are currently in ' + global.home);
            return curPath;
            
        }
        else{
            throw new Error("Operation failed"); 
        }   
             
    }
    
    catch(error){
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


export {upOp};