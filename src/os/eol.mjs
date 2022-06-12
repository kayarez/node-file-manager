import os from 'os';

const getEOL = () => {

    try{

    const eol = os.EOL;
    console.log(JSON.stringify(eol));
    console.log('You are currently in ' + global.home);
    }

    catch(error){
        console.log(error.message);
    }
   

}

export {getEOL};