

const sect = document.querySelector("#container");
const flip = document.querySelector('.card');

sect.addEventListener('click', () => {

    flip.classList.toggle('flipped');

})



/*

JQUERY 

$(function () {
    

    // Variables
    const $sctn = $('section');
    const $crd = $('.card');


    $sctn.on('click', () => {

        $crd.toggleClass('flipped');
        
    });



});
*/