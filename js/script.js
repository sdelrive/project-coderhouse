const menu_btn = document.querySelector('#menu_btn');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

menu_btn.addEventListener('click', function(){
    console.log('click menu_btn');

if(header.classList.contains('open')){      //cierro menu
    header.classList.remove('open')
    overlay.classList.remove('f-in')
    overlay.classList.add('f-out')
}
else{                       //abro menu
    header.classList.add('open')
    overlay.classList.add('f-in')
    overlay.classList.remove('f-out')


}

});