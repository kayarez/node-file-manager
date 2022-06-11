import os from 'os';

const getEOL = () => {

    const eol = os.EOL;
    console.log(JSON.stringify(eol));
   

}

export {getEOL};