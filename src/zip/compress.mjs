import * as zlib from 'node:zlib';
import * as stream from 'node:stream';
import * as fs from 'node:fs';
import * as util from 'node:util';
import * as path from 'node:path';

export const compress = async (filename, filetoCompress) => {

    try {

        var curPath = global.home; 
        var destPath = global.home;
        curPath = path.join(curPath, filename);
        destPath = path.join(destPath, filetoCompress)
        console.log(curPath);

        const pipe = util.promisify(stream.pipeline);
        const bzip = zlib.createBrotliCompress();
        const source = fs.createReadStream(curPath);
        const destination = fs.createWriteStream(destPath);
        await pipe(source, bzip, destination);
        console.log("Compress cuccessful")
        
    } catch (error) {

        console.error(error.message);
        
    }   

};


