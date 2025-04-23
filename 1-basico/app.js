let win = window;
// let dom = document;
// let header = document.querySelector('header h1');
// const arreglo = [...header];

// arreglo.map((elemento) => {
//     console.log(header);
// });

let p =  document.querySelector('main p');

// let container = document.querySelectorAll('.container');
let api = document.querySelector('#api');
let formularios = document.forms;
let imagenes = document.images;
let script = document.scripts;


let lista = document.querySelectorAll('ul.list > li.item');
// console.log(lista);
// api.textContent = "Hola";
// console.log(container);
// console.log(api);

let card = document.querySelectorAll('div.cards > div.card');
console.log(card);

let cards = document.querySelector('div.cards');
console.log(cards.children);
console.log("padre", cards.parentElement.parentElement.parentElement);
console.log("hermano", cards.previousElementSibling.previousElementSibling);

let body = document.querySelector('body');

console.log(body.previousElementSibling);

console.clear();

let elemento = document.querySelector('#elementos');
elemento.textContent = "Nuevo texto ";
elemento.innerHTML = "<p> textos </p> <p> texto </p>";
setTimeout(() => {
    body.classList.add('bg-red')
    console.log(body.classList);
}, 6000);


















//console.log(win);
