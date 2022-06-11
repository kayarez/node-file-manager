import os from 'os';

const getArchitecture = () => {

    const architecture = os.arch();
    console.log(architecture);   

}

export {getArchitecture};