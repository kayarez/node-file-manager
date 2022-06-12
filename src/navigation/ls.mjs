import * as path from "path"
import * as fs from "fs/promises"

const lsOp = async() => {
    var curPath = await fs.readdir(global.home);

    try{
        console.log(curPath);
           
            console.log('You are currently in ' + global.home);
            return curPath;
              
    }
    
    catch(error){
        console.error(error.message);
    } 

}

const exists = async(path) =>{
    
    try {

        await fs.access(path);
        return true;
        
    } catch  {
        return false;
    }
    
};

export {lsOp};