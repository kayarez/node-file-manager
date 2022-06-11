import os from 'os';

const getCPUInfo = () => {

    const cpuInfo = os.cpus();
    const numberOfCpus = cpuInfo.length;
    console.log('Total amount of CPUs: ' + numberOfCpus + "\n");

    for (var i = 0; i < numberOfCpus; i++){

        var cpu = cpuInfo[i];
        cpu.speed = cpu.speed/1000;
        console.log('Model: ' + cpu.model + "\n" + 'Speed: ' + cpu.speed);
    }

}

export {getCPUInfo};