// ----------- Rest

/* traduzindo ao meu entendimento
    coloque a primeiro valor no parametro empresa e o restante no segundo parametro
*/
function showList(empresa, ...clientes){ 

    console.log(`empresa: ${empresa}, clientes: ${clientes}`)   
}

showList("NomeEmpresa", "cliente1", "cliente2", "cliente3", 10 )



// ----------- Spread

const numeros = [1,2,3,4,5,6,7,8,9];
const numeros2 = [...numeros, 20,30,40,50];

// console.log(Math.max(...numeros2));


// Dicas  - Usando NodeList

const items = document.querySelectorAll("li");

//convertendo NodeList para array

const itemsArray = Array.from(document.querySelectorAll("li")) // aqui items agr é um array
console.log(items, itemsArray);

//outra forma

[...items].map(item=>{  // aqui items agr é um array
    console.log(item);
})


// clonar um objeto

const carro = {modelo:"gol", ano:2000, portas:4, cor: "preto"};
const cloneCarro = {...carro};

console.log(carro, cloneCarro);