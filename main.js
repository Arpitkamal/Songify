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
    const songsinfo =[
        {
        name:"zindagi kush to bata",
        artist:"Jubin nautiyal",
        album:"Tubelight",
        duration:"4:23"
        },
        {
            name:"Tere Sang Yaara",
            artist:"Atif aslam",
            album:"Rustam",
            duration:"4:51"
        },
        {
            name:"Tinka Tinka dil mera",
            artist:"Rahat fateh ali khan",
            album:"Tubelight",
            duration:"5:02"
        },
        {
            name:"Akad",
            artist:"Ranjit bawa",
            album:"Bhalwan Singh",
            duration:"3:29"
        }
    ];

    for ( var i=0; i<songlist.length; i++) {
        var index=i+1;
        var audio = $('#song'+index);
        audio.find(' .song-name').text(songsinfo[i].name);
        audio.find(' .song-artist').text(songsinfo[i].artist);
        audio.find(' .song-album').text(songsinfo[i].album);
        audio.find(' .song-length').text(songsinfo[i].duration);
    }

    const filename=['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
    function onclick_play(id , index) {
        $(id).on('click', function () {
            if (song.src.search(filename[index]) === -1){
                song.src = filename[index];
                togglemusic();
            }else {
                togglemusic();
            }
        });
    }
    for (var i=1 ;i<=filename.length;i++){
        onclick_play('#song'+ i, i-1);
    }
});