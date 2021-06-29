const url = "https://ranekapi.origamid.dev/json/api/produto"

//buscando dados em uma API
fetch(url)
.then((r)=>r.json()).then(jsonBody=>{
    console.log(jsonBody);
})


const data = {
    id: "henri.santos",
    nome: "Henrique",
    email: "henriquealann@gmail.com",
    senha: "123456",
    cep: "05822029",
    rua: "Logo ali",
    numero: "230",
    bairro: "Bairro",
    cidade: "Cidade",
    estado: "Estado"
}

//enviando Dados em uma API
fetch("https://ranekapi.origamid.dev/json/api/usuario", {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
})

//site teste
//https://ranek.origamid.dev/login