import * as crypto from 'crypto';
import * as fs from 'node:fs';
import * as path from 'node:path';

export const calculateHash =  (filename) => {

    try {

        var curPath = global.home; 
        curPath = path.join(curPath, filename);
        console.log(curPath);
    
        console.log('You are currently in ' + global.home);
        const readStream = fs.createReadStream(curPath, 'utf-8');
        readStream.on('data', chunk => process.stdout.write(crypto.createHash('sha256').update(chunk).digest('hex')));   
        
    } catch (error) {

        console.error(error.message);
        
    }   

};
