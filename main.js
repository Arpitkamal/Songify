$('.input-wrapper button').on('click ' , function (event) {
    event.preventDefault();
    $('.welcome-screen').addClass('hidden');
    var name = $('#name-input').val();
    $('.main .user-name').html('Walcome, '+name);
    $('.main').removeClass('hidden');
});

$('.main header>button').on('click' , function () {
   $('.main').addClass('hidden');
   $('.welcome-screen').removeClass('hidden');
});

