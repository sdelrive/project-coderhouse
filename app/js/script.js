// defino las clases y ID a utilizar como constantes.

const menu_btn = document.querySelector('#menu_btn');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const faden = document.querySelectorAll('.faden');
const body = document.querySelector('.body');


menu_btn.addEventListener('click', function(){
    console.log('click menu_btn');

if(header.classList.contains('open')){      //cierro menu
    header.classList.remove('open')
    body.classList.remove('no-scroll')

    faden.forEach(function(element){
        element.classList.remove('f-in')
        element.classList.add('f-out')
    
        })

    
}
else{                       //abro menu
    body.classList.add('no-scroll')
    header.classList.add('open')
    faden.forEach(function(element){
    element.classList.add('f-in')
    element.classList.remove('f-out')

    })


}

});