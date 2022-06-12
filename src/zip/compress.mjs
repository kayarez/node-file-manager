import * as zlib from 'node:zlib';
import * as stream from 'node:stream';
import * as fs from 'node:fs';
import * as util from 'node:util';
import * as path from 'node:path';
import { access } from 'node:fs/promises';

export const compress = async (filename, filetoCompress) => {

    try {

        var curPath = global.home; 
        var destPath = global.home;
        curPath = path.join(curPath, filename);
        destPath = path.join(destPath, filetoCompress)


        const pipe = util.promisify(stream.pipeline);
        const bzip = zlib.createBrotliCompress();
        const source = fs.createReadStream(curPath);
        const destination = fs.createWriteStream(destPath);
        await pipe(source, bzip, destination);
        console.log("Compress cuccessful");
        

        console.log('You are currently in ' + global.home);
    
        
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


