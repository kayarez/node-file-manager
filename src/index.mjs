import {parseUsername as welcome} from './general/welcome.mjs'
import {parseGoodbye as goodbye} from './general/goodbye.mjs'
import { getHomeDir as homedir } from './os/homeDir.mjs'
import { getUsername as username } from './os/username.mjs';
import { getArchitecture as architecture } from './os/architecture.mjs';
import { getEOL as eol } from './os/eol.mjs';
import { getCPUInfo as cpus } from './os/cpuInfo.mjs';
import { read } from './fs/readfile.mjs';
import { rl } from './utils/readline.mjs';
import {cdOp} from './navigation/cd.mjs';
import {upOp} from './navigation/up.mjs';
import {lsOp} from './navigation/ls.mjs';
import {calculateHash} from './hash/calcHash.mjs';
import {compress} from './zip/compress.mjs';
import {decompress} from './zip/decompress.mjs';
import {renamefile} from './fs/renamefile.mjs';
import {create} from './fs/addfile.mjs';
import {copyfile} from './fs/copyfile.mjs';
import {movefile} from './fs/movefile.mjs';
import {deletefile} from './fs/deletefile.mjs';


welcome();
console.log('You are currently in ' + process.env.home || process.env.USERPROFILE);


rl.on('line', async(answer) => {

  var str = answer.split(" ");

   switch (true) {
        case (answer === '.exit'):
        goodbye();
        rl.close();
        break;

        case (answer === 'os --homedir'):           
        homedir();
        break;

        case (answer === 'os --username'):           
        username();
        break;
        
        case (answer === 'os --architecture'):           
        architecture();
        break; 

        case (answer === 'os --EOL'):           
        eol();
        break; 

        case (answer === 'os --cpus'):           
        cpus();
        break; 

        case (str[0] === 'cat'):                   
        read(str[1]);
        break; 

        case (str[0] === 'add'):                  
        create(str[1]);
        break; 

        case (str[0] === 'rm'):                  
        deletefile(str[1]);
        break;

        case (str[0] === 'rn'):                 
        renamefile(str[1], str[2]);
        break;
        
        case (str[0] === 'cp'):                
        copyfile(str[1], str[2]);
        break; 

        case (str[0] === 'mv'):              
        movefile(str[1], str[2]);
        break; 

        case (str[0] === 'hash'):          
        calculateHash( str[1]);
        break; 

        case (str[0] === 'compress'):         
        compress(str[1], str[2]);
        break; 

        case (str[0] === 'decompress'):         
        decompress(str[1], str[2]);
        break; 

        case (str[0] === 'cd'):          
        cdOp(global.home, str[1]);
        break; 

        case (answer === 'up'):         
        upOp();
        break; 

        case (answer === 'ls'):         
        lsOp();
        break; 
   
       default:
        console.log("Invalid input");
           break;
   }

  }
  );


  process.on('exit', (code) => {
    goodbye();
  });
  



