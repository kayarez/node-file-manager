import * as zlib from 'node:zlib';
import * as stream from 'node:stream';
import * as fs from 'node:fs';
import * as util from 'node:util';
import * as path from 'node:path';

export const decompress = async (filename, filetoDecompress) => {

    try {

        var curPath = global.home; 
        var destPath = global.home;
        curPath = path.join(curPath, filename);
        destPath = path.join(destPath, filetoDecompress)
        console.log(curPath);

        const pipe = util.promisify(stream.pipeline);
        const bzip = zlib.createBrotliDecompress();
        const source = fs.createReadStream(curPath);
        const destination = fs.createWriteStream(destPath);
        await pipe(source, bzip, destination);
        console.log("Decompress cuccessful")
        
    } catch (error) {

        console.error(error.message);
        
    }   

};


