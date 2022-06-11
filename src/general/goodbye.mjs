import {username} from '../general/welcome.mjs'

const parseGoodbye = () => {

        const goodbye = `Thank you for using File Manager, ${username}!`;
        console.log(goodbye);
    
}

export {parseGoodbye};