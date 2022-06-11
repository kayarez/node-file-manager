const getHomeDir = () => {
    console.log(process.env.home || process.env.USERPROFILE);

    return process.env.home || process.env.USERPROFILE;
   

}

export {getHomeDir};