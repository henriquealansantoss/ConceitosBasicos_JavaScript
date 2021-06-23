/*  
    --- Classes não existem em javascript, elas são 'syntax sugar', uma maneira mais 
    confortável de trabalhar com a herança prototipal da linguagem ---

   - O que são classes e por que elas são ultilizadas
   - Como resolver os problemas de acoplamento e dependência que as classes geram
   - Se exite a possibilidade de criar propriedades privadas
   - Como fazer Herança com classes  
*/

//-----------------------------//--------------------------------------------------

/*  
   - O que são classes e por que elas são ultilizadas
        As classes são uma das formas de criar varios objetos com as mesmas propriedades
        poupando assim o trabalho da criação manual desses objetos e suas propriedades.        
*/

// Como é a sintaxe de uma classe?

class MyfirstClass {

    // O constructor é um método especial que cria e inicializa
    // um objeto gerado a partir de uma classe.
    // Se o constructor não for criado manualmente, é criado um constructor default 
    // pelo próprio javascript
    constructor() {}

    method01() {}
    method02() {}
}

// as classes são basicamente funções especiais que constroem novos objetos

// Outras formas de declaração de classes

const myConst = class MySecondClass {}

//ou

const myConst = class {}

//ou 

function MakeClass() {
    return class {}
}

//////////////////////////////////////

// this representa o objeto que é criado na invocação da classe

class Reptile {
    constructor(firtAppearance) {
        this.firtAppearance = firtAppearance
    }

    //criando metodos
    FirstAppearance() {
        return this.firtAppearance
    }

    //retornando o valor da propriedade com get
    get FirstTimeAppearance() {
        return this.firtAppearance
    }

    // setando um novo valor 
    set newFirstAppearance(firtAppearance) {
        this.firtAppearance = firtAppearance
    }

}

const smaug = new Reptile('The Hobbit')

// smaug.FirstAppearance() // 'The Hobbit'


// smaug.FirstTimeAppearance - (get) podem se omitir os parenteses // 'The Hobbit'

// smaug.newFirstAppearance = 'New appearance value'
// smaug // {firstAppearance: 'New appearance value'}


/** Fique atento
 * Multação de dados é uma má prática. Sempre que possível, devemos evitar modificar
 * dados na aplicação
 */

// metodos estaticos


class Reptile {
    constructor(firtAppearance) {
        this.firtAppearance = firtAppearance
    }

    static getClassName() {
        console.log(this.name); // Reptile
        return this.name

    }
}

/* o objeto estatico não é invocado a partir dos métodos da classe e sim invocado pelo nome da 
classe e encadear o nome do método

-- funciona como atribuir um método para classe diretamente.
*/

Reptile.getClassName(); // Reptile

//////////////////////////////////////

/*
 - Como fazer Herança com classes  
*/

// extends - possibilita a criação de sub-classes (ou derivados da classe pai)

class Reptile {
    constructor(firtAppearance) {
        this.firtAppearance = firtAppearance
    }

    //criando metodos
    getFirstAppearance() {
        return this.firtAppearance
    }

}

class Dragon extends Reptile { // extends 
    constructor(firtAppearance) {
        super(firtAppearance) // super - metodo especial que faz com que o 
        // constructor da classe pai exista na classe filha
        // inocsndo ele é preciso especificar o valor que a 
        // propriedade firtAppearance deve ter
    }
}

// do mesmo modo pra invocar
const smaug = new Dragon('The Hobbit')

smaug.getFirstAppearance(); // The Hobbit

/*
- Se exite a possibilidade de criar propriedades privadas
*/

// alguns desenvolvedores usam o underline "_firsAppearance" como forma de informar que
// essa propriedade não dever ser acessado de forma direta


// Nesse caso causaria  um erro na aplicação - *confirma se ainda está em teste 
class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
}


/*
- Como resolver os problemas de acoplamento e dependência que as classes geram

*/
// Neste caso a instancia não deve herdar o metodo dontWant()
// Neste modelo não seria possivel pois a instancia herdaria todos os metodos
// class MyClass {
//     method1(){
//         return 'String method1'
//     }

//     dontWant(){
//         throw new Error('Nooo!')
//     }
// }


// class MysubClass extends MyClass{
//     method2(){
//         return 'String method2'
//     }
// }

// const instance = new MysubClass()


// Composição é a palavra chave
// uma forma de contornar 
// tiramos a class

const method1 = {
    method1() {
        return 'String method1'
    }

}
const dontWant = {
    dontWant() {
        throw new Error('Nooo!')
    }
}

const method2 = {
    method2() {
        return 'String method2'
    }
}


const instance = {
    ...method1,
    ...method2
}

// Composição
// herdando assim somente os metodos desejados
instance.method1()
instance.method2()