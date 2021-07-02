const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
];

// filter - filtra os valores de um array conforme o que for solicitado na arrow function
const precoFilter = precos.filter(item => item.includes("R$"))
console.log(precoFilter);
// map - retorna todos os itens de um array = neste caso neste caso convertendo as strings para numeros
const precoMap = precoFilter.map(item => Number(item.replace("R$", "")))
console.log(precoMap);
// reduce - pega o item anterior no primeiro parametro = neste caso está sendo feito uma soma sempre
// item anterior com o item atual no array (pode ter valor indicado para inicio 
// ex: precoMap.reduce((acc, item) => { return acc + item}, 0))
const precoReduce = precoMap.reduce((acc, item) => acc + item)
console.log(precoReduce);