

const dataDoAniversario = new Date("Nov 20, 2024  20:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();


const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOAniversario = timeStampDoAniversario - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diaEmMs);
    const horasAteOAniversario = Math.floor((distanciaAteOAniversario % diaEmMs) / horaEmMs);
    const minutosAteOAniversario = Math.floor((distanciaAteOAniversario %  horaEmMs) / minutoEmMs);
    const segundosAteOAniversario = Math.floor((distanciaAteOAniversario % minutoEmMs) /1000);


    console.log(diasAteOAniversario);
    console.log(horasAteOAniversario);
    console.log(minutosAteOAniversario);
    console.log(segundosAteOAniversario);


    document.getElementById('contador').innerHTML =  `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`
},1000);
