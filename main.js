$(document).ready(function () {
    $('.english_song').on('click',function () {
        songsinfo =[
            {
                fileName: "https://goo.gl/rnsbfk",
                lyricsLink: "http://www.lyricsted.com/tamma-tamma-again-badrinath-ki-dulhania/",
                videoLink: "https://www.youtube.com/watch?v=EEX_XM6SxmY",
                duration: "2:56",
                album: "kk",
                artist: "Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi",
                name: "Badri Ki Dulhania (Title Track)",
                image: "https://i.imgur.com/rj1EoV8.jpg"
            }
        ];


    });
    var songsinfo =[];
    $.ajax({
        url:'https://jsonbin.io/b/5a034888a6dd20501a49652b',
        method:'GET',
        dataType:'json',
        success: function (data) {
            songsinfo = data;
            console.log(data);
            init();
        }
    });
    function init() {
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
            var name_first = $('#name-input').val();
            var name_last = $('#name-input-last').val();
            $('.main .user-name').html('Walcome, '+name_first+name_last);
            $('.main').removeClass('hidden');
            window.localStorage.setItem('goodname', JSON.stringify(name)); // use to store name in memory
            var fullDate = new Date();
            $('.main header .current-date').html(fullDate);
            $(document).on('keypress' , function (event) {
                if(event.keyCode == 32 || event.keyCode == 112) {    //console.log(event.keyCode); to check any keypress
                    togglemusic();
                }
            });
            $('.song1-lyrics').css('display','none')
        });


        $('.clickable').on('click', togglemusic);


//back button
        $('.main header>button').on('click' , function () {
            $('.main').addClass('hidden');
            $('.welcome-screen').removeClass('hidden');
        });

        // using objects song name ,artist, album,duration in display on list

        for ( var i=0; i<songsinfo.length; i++) {
            var index=i+1;
            var audio = $('#song'+index);
            console.log(audio);
            audio.find(' .song-name').text(songsinfo[i].name);
            audio.find(' .song-artist').text(songsinfo[i].artist);
            audio.find(' .song-album').text(songsinfo[i].album);
            audio.find(' .song-length').text(songsinfo[i].duration);
        }

        // function for  on click play song in list

        function onclick_play(id , index) {
            $(id).on('click', function () {
                if (song.src.search(songsinfo[index].fileName) === -1){
                    song.src = songsinfo[index].fileName;
                    var current_song= $('.current-song-wrapper');
                    current_song.find('img').attr('src', songsinfo[index].image);        // for image in current play
                    current_song.find(' .current-song-album').text(songsinfo[index].album); //for album name in current play
                    current_song.find(' .current-song-name').text(songsinfo[index].name); // for song name in current play
                    displaylyrics(index);   //calling displaylyrics funtion
                    togglemusic();
                }else {
                    togglemusic();
                    displaylyrics(index);  //first song lyrics is not display at the first time thats why call funtion
                }
            });
        }
        for (var i=1 ;i<=songsinfo.length;i++){
            onclick_play('#song'+ i, i-1);
        }

        function displaylyrics(index1) {
            $('.current-song-name').hover(function () {
                    var song_lyrics_selector=$('.song-lyrics');
                    var video=$('.song_video');
                    console.log(video);
                    song_lyrics_selector.html(songsinfo[index1].lyricsLink);
                    video.src = songsinfo[index1].videoLink;
                    song_lyrics_selector.css('display', 'inline-block');
                    video.css('display','inline-block');
                }, function () {
                    $('.song-lyrics').css('display', 'none');
                    $('.song_video').css('display', 'none');
                }
            )
        }
        function setfirstsong() {
            var firstsong = songsinfo[0];
            song.src= firstsong.fileName;
            var current_song= $('.current-song-wrapper');
            current_song.find('img').attr('src', firstsong.image);        // for image in current play
            current_song.find(' .current-song-album').text(firstsong.album); //for album name in current play
            current_song.find(' .current-song-name').text(firstsong.name)
        }
        setfirstsong();
    }
});