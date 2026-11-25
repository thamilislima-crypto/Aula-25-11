async function load() {
    const request = await fetch("https://www.onepieceapi.com/api/devil-fruits")
    return await request.json();
    
}
let dados = await load();

console.log(dados[0].type)


let body = document.querySelector("body");


dados.forEach(element => {
    body.innerHTML += `
    <div class ="container">
    <h1>${element.name.en}</h1>
    <h2>Fruta do tipo</h2>
    <img src="${element.image_url}">
    </div>
    `
});
