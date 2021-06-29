


async function fetchProduct(url){
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
    // console.log(jsonBody);
}

const requisicao = fetchProduct("https://ranekapi.origamid.dev/json/api/produto");


requisicao.then(response=>{
    console.log(response);
})