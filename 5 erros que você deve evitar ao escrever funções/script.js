// Evite 

//1 - escrever funções com mais de dois parametros

const sum = (firstNumber, secondNumber, thirdNumber, fourthNumber) =>
    firstNumber + secondNumber + thirdNumber + fourthNumber

//2 - escrever fuções que fazem mais de uma ação
/*
   Dicas:
 - funções que fazem uma coisa só são a regra de ouro da engenharia de software
 - ficando assim mais facil para manutenção e entendimento
 - uma função deve executar uma ação, executar bem está ação e executar somente essa ação.
 */

const emailUsers = users => {
    users.forEach(user => {
        const userRecord = database.lookup(user) // esta verificando no banco de dados o usuario

        if (userRecord.isActive()) { // se usuario estiver ativo
            sendEmail(user) // envie o email
        }
    })
}

// 3 - funções com nome que não diz exartamente o que ela faz
const addToDate = (month,date)=>{ // o que essa função faz?
    //...
}

//4 - funções que produzem efeitos colaterais
const addNumberToArray = number =>{ 
    numbers = number.concat(number) // esta sendo atribuido o valor de number ao array numbers
                                    // assim alterando o valor de array number
    return numbers
}

//5 - Não encapsular condicionais
// codigos soltos que não revelam sua intenção 
if(person.age >= 18 && person.age <=30){
    //...
}

// Prefira

//1
const sum = (...numbers) => {
    console.log(numbers) //[2,5,3,7]

    return numbers.reduce((accResult, currNumber) => accResult + currNumber, 0)
}

//2
const isActiveUser = user => {
    const userRecord = database.lookup(user) // recebe um user como parâmetro
    // checar se o user esta ativo e retorna um boolean
    return userRecord.isActive()
}

const emailActiveUsers = user => // recebe um array de usuários por parâmetro 
    user
    .filter(isActiveUser) // filtra o array atraves da função isActiveUser
    .forEach(sendEmail) // envia o email para todos os usuários ativos.


//3 
// agr somente de olhar o nome ja temos uma ideia do que a função faz
/*
 - e se fica difícil de dar uma nome expecifico a essa função, pode ser um indício 
que ela está fazendo mais do que deveria fazer
*/
const addMonthToDate = (month,date)=>{ 
    //...
}

//4
/* está sendo criando um novo array number a partir 
do valor do array numbers e o valor de number
Desta forma:
- permitem sem condigo fique mais conciso
- evite bugs por multação
*/
const addNumberToArray = number => [...numbers, number]

//5
const isCoolPerson = person => person.age >= 18 && person.age <= 30

if(isCoolPerson(person)){
    //...
}