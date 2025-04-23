let padre = document.querySelector('container');
let node = document.createElement('h2');
node.textContent = "Titulo de segundo nivel";
let texto = document.createTextNode("Palabra para el node de texto");
// padre.appendChild(node);
// padre.appendChild(texto);
let lista = document.querySelector('#list');
// console.log(lista);
let HTML = document.createElement('li');
let CSS = document.createElement('li');
let JS = document.createElement('li');

 HTML.textContent = "HTML";
 CSS.textContent = "CSS";
 JS.textContent = "JS";

 HTML.classList.add('item');
 CSS.classList.add('item');
 JS.classList.add('item');
//  titulo.classList.add('item');

lista.append(HTML, CSS , JS)

let card = document.querySelector('.card');
let lista_card = card.querySelector('#list');
let titulo = document.createElement('h2');

titulo.textContent = "titulo de la card .";

// card.append(titulo)

card.insertBefore(titulo,lista);

// card.insertAdjacentElement(titulo);

let beforebegin = document.createElement('li');
beforebegin.classList.add('item', 'before');
beforebegin.textContent = "nuevo contenido ubicado antes de la lista ordenada";

let afterbegin = document.createElement('li');
afterbegin.classList.add('item');
afterbegin .textContent = "Nuevo contenido ubicado al inicio de la lista ordenada";

let beforeend = document.createElement('li');
beforeend.classList.add('item');
beforeend.textContent = "Nuevo contenido ubicado al final de la lista ordenada ";

let afterend = document.createElement('li');
afterend.classList.add('item');
afterend.textContent = "Nuevo contenido ubicado despues de la lista ordenada";


lista_card.insertAdjacentElement('beforebegin', beforebegin);
lista_card.insertAdjacentElement('afterbegin', afterbegin);
lista_card.insertAdjacentElement('beforeend', beforeend);
lista_card.insertAdjacentElement('afterend', afterend);




const dias = [
    {
        id: 1,
        name : "lunes",
        img: "https://picsum.photos/641/360",
        parrafo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

        

    },
    {
        id: 2,
        name : "Martes",
        img: "https://picsum.photos/642/360",
        parrafo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: 3,
        name : "Miercoles",
        img: "https://picsum.photos/643/360",
        parrafo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

        

    },
    {
        id: 4,
        name : "Jueves",
        img: "https://picsum.photos/644/360",
        parrafo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

        

    },
    {
        id: 5,
        name : "Viernes",
        img: "https://picsum.photos/645/360",
        parrafo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

        

    },
    {
        id: 6,
        name : "Sabado",
        img: "https://picsum.photos/646/360",
        parrafo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

        

    },
    {
        id: 7,
        name : "Domingo",
        img: "https://picsum.photos/647/360",
        parrafo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

        

    }   

];

let card_dias = document.querySelector('#dias')

console.log(dias);

dias.map(({name,img,parrafo}) => {
    
    
    let card = document.createElement('div');
    let card_header = document.createElement('div');
    let card_titulo = document.createElement('h2');
    let card_body = document.createElement('div');
    let imagen = document.createElement('img');
    let p = document.createElement('p');

    card.classList.add('card');
    card_header.classList.add('card_header');
    card_titulo.classList.add('card_title');
    card_body.classList.add('card_body');
    imagen.classList.add('card__img')
    p.classList.add('card_paragraph')

    imagen.setAttribute('src', img)


    card_titulo.textContent = name;
    p.textContent = parrafo;
    card_body.append(imagen, p)    
    card_header.append(card_titulo)
    card.append(card_header)
    card.append(card_body);
    card_dias.append(card)

    // card_dias.append(card);
})








