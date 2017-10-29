$(document).ready(function () {
    const song =$('audio')[0];
    function togglemusic() {
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



    function formattime(time) {
        const min= Math.floor(time/60);
        const sec= Math.floor(time%60);
        return (min < 10 ? '0'+ min : min) +':'+ (sec < 10 ? '0'+sec : sec)
    }

    function timer() {
        const currenttime = formattime(song.duration);
        const duration = formattime(song.currentTime);
        $('.song-duration').text(currenttime);
        $('.time-elapsed').text(duration);
    }
    timer();
    setInterval(timer, 1000);

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

    const songlist=['zindagi kush to bata', 'song2', 'song3', 'song4'];
    for ( var i=0; i<songlist.length; i++) {
        var index=i+1;
        $('#song'+index+ ' .song-name').text(songlist[i]);
    }

    const filename=['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
    $('#song1').on('click', function () {
        song.src=filename[0];
        togglemusic();
    });
    $('#song2').on('click', function () {
        song.src=filename[1];
        togglemusic()
    });
    $('#song3').on('click', function () {
        song.src=filename[2];
        togglemusic();
    });
    $('#song4').on('click', function () {
        song.src=filename[3];
        togglemusic();
    });
});