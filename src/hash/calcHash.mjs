import * as crypto from 'crypto';
import { access } from 'fs/promises';
import * as fs from 'node:fs';
import * as path from 'node:path';

export const calculateHash =  async(filename) => {

    try {

        var curPath = global.home; 
        curPath = path.join(curPath, filename);

    
        console.log('You are currently in ' + global.home);

        if(await exists(curPath)){
        const readStream = fs.createReadStream(curPath, 'utf-8');
        readStream.on('data', chunk => process.stdout.write(crypto.createHash('sha256').update(chunk).digest('hex')));   
        }
        else{

            throw new Error("Operation failed"); 
        } 
        
    } catch (error) {

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
