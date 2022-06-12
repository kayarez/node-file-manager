import * as fs from "fs/promises"

const lsOp = async() => {
    

    try{

        var curPath = await fs.readdir(global.home);
        console.log(curPath);
            console.log('You are currently in ' + global.home);
            return curPath;
              
    }
    
    catch(error){
        console.error(error.message);
    } 

};


export {lsOp};