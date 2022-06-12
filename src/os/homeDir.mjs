global.home = process.env.home || process.env.USERPROFILE;

const getHomeDir = () => {

    try{
    
    console.log(process.env.home || process.env.USERPROFILE);
    console.log('You are currently in ' + global.home);

    return process.env.home || process.env.USERPROFILE;
    }

    catch(error){
        console.error(error.message);
    }
    
   

}

export {getHomeDir};