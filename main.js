$('.input-wrapper button').on('click ' , function (event) {
    event.preventDefault();
    $('.welcome-screen').addClass('hidden');
    var name = $('#name-input').val();
    $('.main .user-name').html('Walcome, '+name);
    $('.main').removeClass('hidden');
});

