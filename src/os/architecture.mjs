import os from 'os';

const getArchitecture = () => {

    try{
    const architecture = os.arch();
    console.log(architecture); 
    console.log('You are currently in ' + global.home);  
    }

    catch(error){
        console.error(error.message);
    }

}

export {getArchitecture};