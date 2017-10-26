$('.input-wrapper form').on('submit' , function (event) {
    event.preventDefault();
    $('.welcome-screen').addClass('hidden');
    var name = $('#name-input').val();
    $('.main .user-name').html('Walcome, '+name);
    $('.main').removeClass('hidden');
    var fullDate = new Date();
    $('.main header .current-date').html(fullDate)


});

$('.main header>button').on('click' , function () {
   $('.main').addClass('hidden');
   $('.welcome-screen').removeClass('hidden');
});

$(document).on('keypress' , function (event) {
    if(event.keyCode == 32) {
        var song = $('audio')[0];
        if (song.paused) {
            song.play();
            $('.clickable').addClass('fa-pause').removeClass('fa-play');
        }
        else {
            song.pause();
            $('.clickable').addClass('fa-play').removeClass('fa-pause');
        }
    }
});


                                                // var ispaused=true
$('.clickable').on('click', function () {
   var song= $('audio')[0];
   if(song.paused) {                            // if(ispaused)
       song.play();
       $(this).addClass('fa-pause').removeClass('fa-play');
       // ispaused=false
   }
   else {
       song.pause();
       $(this).addClass('fa-play').removeClass('fa-pause');
       // ispaused=true
   }
});

