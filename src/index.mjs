import {parseUsername as welcome} from './general/welcome.mjs'
import {parseGoodbye as goodbye} from './general/goodbye.mjs'
import { getHomeDir as homedir } from './os/homeDir.mjs'
import { getUsername as username } from './os/username.mjs';
import { getArchitecture as architecture } from './os/architecture.mjs';
import { getEOL as eol } from './os/eol.mjs';
import { getCPUInfo as cpus } from './os/cpuInfo.mjs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

welcome();

rl.question('Operation: ', (answer) => {


   switch (answer) {
        case '.exit':
        goodbye();
        break;

        case 'os --homedir':           
        homedir();
        break;

        case 'os --username':           
        username();
        break;
        
        case 'os --architecture':           
        architecture();
        break; 

        case 'os --EOL':           
        eol();
        break; 

        case 'os --cpus':           
        cpus();
        break; 
   
       default:
           break;
   }
  });



//welcome();
//goodbye();