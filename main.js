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

    const songlist=['zindagi kush to bata', 'Tere Sang Yaara','Tinka Tinka Dil Mera','Aakad'];

    const songartist=['Jubin nautiyal', 'Atif aslam', 'Rahat fateh ali khan ', 'Ranjit bawa'];
    const songalbum=['Tubelight','Rustam', 'Tubelight',' Bhalwan Singh'];
    const songduration=['4:23','4:51','5:02','3:29'];
    for ( var i=0; i<songlist.length; i++) {
        var index=i+1;
        $('#song'+index+ ' .song-name').text(songlist[i]);
        $('#song'+index+ ' .song-artist').text(songartist[i]);
        $('#song'+index+ ' .song-album').text(songalbum[i]);
        $('#song'+index+ ' .song-length').text(songduration[i]);
    }

    for (var j=0; j<songartist.length; j++){
        var index1=j+1;
        $('#song'+index1+ ' .song-artist').text(songartist[j]);
    }

    const filename=['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];

    $('#song1').on('click', function () {
        if (song.src.search(filename[0]) === -1){
            song.src = filename[0];
            togglemusic();
        }else {
            togglemusic();
        }
    });
    $('#song2').on('click', function () {
        if (song.src.search(filename[1]) === -1){
            song.src = filename[1];
            togglemusic();
        }else {

            togglemusic();
        }
    });
    $('#song3').on('click', function () {
        if (song.src.search(filename[2]) === -1){
            song.src = filename[2];
            togglemusic()
        }else {
            togglemusic();
        }
    });
    $('#song4').on('click', function () {
        if (song.src.search(filename[3]) === -1){
            togglemusic();
            song.src = filename[3];
        }else {
            togglemusic();
        }
    });
});