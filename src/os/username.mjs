import os from 'os';

const getUsername = () => {

    try{
    const username = os.userInfo().username;
    console.log(username);
    console.log('You are currently in ' + global.home);
    }
    catch{
        console.error(error.message);
    }

}

export {getUsername};