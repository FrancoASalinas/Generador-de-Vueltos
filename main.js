const tempInput = document.getElementById('temp');
const priceMin = document.getElementById('price-min');
const priceMax = document.getElementById('price-max');
const difference = document.getElementById('difference');
const buttonGenerar = document.querySelector('.generador__options--button');
const generadorOptions = document.querySelector('.generador__options');
const generadorGame = document.querySelector('.generador__game');
const para1 = document.querySelector('.generador__game--para1');
const para2 = document.querySelector('.generador__game--para2');
const buttonVuelto = document.querySelector('.generador__game--button');
const vuelto = document.getElementById('vuelto');
const generadorEnd = document.querySelector('.generador__end');
let paraEnd = document.querySelector('.generador__end--para');
const buttonEndOptions = document.querySelector('.generador__end--button-options');
const buttonEndPlay = document.querySelector('.generador__end--button-play');
const generadorGameP = document.querySelector('.generador__game--div--p');
const generadorOptionsP = document.querySelector('.generador__options--para')

let timeoutID;


const game = new Game(tempInput, priceMin, priceMax, difference);

buttonGenerar.addEventListener('click', ()=> {
    game.generarJuego();
});

buttonVuelto.addEventListener('click', ()=> {
    if (vuelto.value !== ''){
        game.resultado()
    } else {
        generadorGameP.textContent = 'Escribe un numero'
    }
});

buttonEndPlay.addEventListener('click', ()=> {
    game.generarJuego();
    generadorEnd.style.display = 'none';
})

buttonEndOptions.addEventListener('click', ()=>{
    generadorEnd.style.display = 'none';
    clearTimeout(timeoutID);
    game.displayOptions();
})

