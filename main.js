'use strict'

let buttonSet = document.getElementById('set_button');
let checker = 0;

buttonSet.addEventListener('click', function(e){
    if(checker == 0){
    buttonSet.style.transform = 'rotate(90deg)';
    buttonSet.style.bottom = '4px';
    buttonSet.style.left = '6px';
    buttonSet.style.transition = '1s'
    checker = 1;
    console.log(checker)
    }
    else if(checker != 0){
        buttonSet.style.transform = 'rotate(-0deg)';
        buttonSet.style.bottom = '16px';
        buttonSet.style.left = '0px';
        checker = 0;
        console.log(checker)
    
}
})