var username;

const parseUsername = () => {


    const userInputArgs = process.argv.slice(2);

    const cliArgumenst = userInputArgs.reduce((acc, arg) => {

            if(arg.startsWith('--username')){

                username = arg.split('=').pop();
                acc = `Welcome to the File Manager, ${username}!`;
            }

        return acc;
    }, '')

     console.log(cliArgumenst);
    
}

export {parseUsername, username};