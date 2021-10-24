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