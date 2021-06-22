// Evite

//1 - criar const com nome de abreviações
const tmStmp
const yyyymmdd

//2 - criar const com nomes que multiplos sentidos
const result
const data

//3 - colocar o nome do objeto como titulo nos dados
const person = {
    personName:'Henrique',
    personAge: 31,
    personProfession:'Programador Junior'
}

//4 - função curto-circuito
const createBook = name =>{
    const bookName = name || 'Jurassic Park'
    //...
}

//5 - Nomes que deixam pistas falsas
const jp // será que é João Paulo?
const l // L de que ?
const maleUsersList = { // se não é uma lista(array), não precisa ter ...list no nome
    //...
}


//Prefira

//1
const timeStamp
const currentDate

//2
const sumResult
const usersList

//3
const person = {
    name:'Henrique',
    age: 31,
    profession:'Programador Junior'
}

//4
const createBook = (name = 'Jurassic Park')=>{
    //...
}

//5
const japan
const limão
const maleUsers = {
    //...
}