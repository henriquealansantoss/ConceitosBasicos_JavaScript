import numeroaleatorio from "./numeroaleatorio.js";

//area do circulo
function area(raio){
    return Math.PI * raio * raio;
}


function circunferencia(raio){
    return 2 * raio * Math.PI;
}

function aleatorio(){
    return numeroaleatorio();
}



// objeto unico circulo
const circulo ={
    area,
    circunferencia,
    aleatorio
}

//exportando circulo 
export default circulo;