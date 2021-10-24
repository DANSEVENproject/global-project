// Js
/*var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function() {
    modal.classList.add('modal_active');
    setTimeout(() => {
        modal.classList.remove('modal_active');
    }, 5000);
    close.addEventListener('click', function() {
        modal.classList.remove('modal_active');
    });
});*/

// jQuery
$(function() {
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');
    var ButtonArrow = $('#swipe-up');

    button.on('click', function() {
        modal.addClass('modal_active');
    });

    setTimeout(() => {
        modal.removeClass('modal_active');
    }, 5000);

    close.on('click', function() {
        modal.removeClass('modal_active');
    });

    ButtonArrow.bind('click', function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 400);
    });
});