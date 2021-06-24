const menu = {
    class: ".principal",
    ativa() {
        const menuElement = document.querySelector(this.class); // O this faz uma referencia ao todo "O Objeto geral".
        console.log(menuElement);
    }
}

menu.ativa();

// assim como document é um objeto e querySelector é um metodo de document.
// console tambem é um objeto e log é um metodo de console.


// somente null e undefined não são objetos - não contém metodos.