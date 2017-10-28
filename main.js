function togglemusic() {
    var song= $('audio')[0];
    if(song.paused) {                            // if(ispaused)
        song.play();
        $('.clickable').addClass('fa-pause').removeClass('fa-play');
        // ispaused=false
    }
    else {
        song.pause();
        $('.clickable').addClass('fa-play').removeClass('fa-pause');
        // ispaused=true
    }
}


$('.input-wrapper form').on('submit' , function (event) {
    event.preventDefault();
    $('.welcome-screen').addClass('hidden');
    var name = $('#name-input').val();
    $('.main .user-name').html('Walcome, '+name);
    $('.main').removeClass('hidden');
    var fullDate = new Date();
    $('.main header .current-date').html(fullDate);
    $(document).on('keypress' , function (event) {
        if(event.keyCode == 32) {
            togglemusic();
        }
    });
});


$('.clickable').on('click', togglemusic);






//back button
$('.main header>button').on('click' , function () {
    $('.main').addClass('hidden');
    $('.welcome-screen').removeClass('hidden');
});
