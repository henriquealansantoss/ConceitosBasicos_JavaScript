

// const exempleFunction = () => {
//     let textElement = document.querySelector('.principal').innerText;
//     // console.log(textElement);
// }

// exempleFunction();

// // ----------------------------------------

// const nameUser = name => {
//     return name.toUpperCase();
// }

// let userName = nameUser('Henrique');
// // console.log(userName);

// // ----------------------------------

// const typeCar = nameCar => nameCar.toUpperCase();
// // console.log(typeCar("Caminhonete"));


/* 

    O que muda de um function normal para uma arrow function é a 
    questão do this que esta dentro dela.

    arrow functionnão cria um this.

*/


class Menu {
    constructor(menu){
        this.menuElement = document.querySelector(menu);
    }

    addActiveEvent(){
        this.menuElement.addEventListener("click", (event) =>{
            event.target.classList.add("active");
        })
    }

}

const menu = new Menu(".principal");
menu.addActiveEvent();
// console.log(menu.menuElement);
