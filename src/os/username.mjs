import os from 'os';

const getUsername = () => {

    const username = os.userInfo().username;
    console.log(username);
   

}

export {getUsername};