import * as path from "path"
import * as fs from "fs/promises"

const cdOp = async(oldPath, newPath) => {
    var curPath = path.join(oldPath, newPath);

    try{
        if(await exists(curPath))
           {
            global.home = curPath;
            console.log('You are currently in ' + curPath);
            return curPath;
        }
        else{
            throw new Error("Operation failed");
        }        
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

export {cdOp};