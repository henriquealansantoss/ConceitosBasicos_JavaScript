/* Desestruturando */

// forma 01
function handmouseMove(event) {
    const {
        clientX,
        clientY
    } = event; //desestruturando

    // console.log(`${clientX}, ${clientY}`);
}

document.documentElement.addEventListener('mousemove', handmouseMove)

// forma 02
function handmouseMove2({
    clientX,
    clientY
}) {

    // console.log(`${clientX}, ${clientY}`);
}

document.documentElement.addEventListener('mousemove', handmouseMove2)


// com array

const frutas = ["maça", "banana", "pera"];

const [f1, f2, f3] = frutas;

// console.log(f1,f2,f3);
// console.log(frutas);



//------------------- // Utilizada em React

const userState = ["red", function(color){
    userState[0] = color;
}]

const [color, setColor] = userState;