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
    const songsinfo =[
        {
        name:"zindagi kush to bata",
        artist:"Jubin nautiyal",
        album:"Tubelight",
        duration:"4:23",
            url:"https://i.ytimg.com/vi/iYjm0OSo7YM/hqdefault.jpg",
            songfile:'song1.mp3',
            lyrics1:'Ek Din Mohabbat Odh Kar\n' +
            'Ek Din Gali Ke Mod Par\n' +
            'Teri Hatheli Par\n' +
            'Likhun Mera Naam Tere Naam Par\n' +
            'Phir Tu Taqalluf Chhod Kar\n' +
            'Phir Tu Jhuka Kar Ke Nazar\n' +
            'Rakhna Mere Kaandhe Pe Sar\n' +
            'Zindagi…\n' +
            'Kuch To Bata Zindagi\n' +
            'Apna Pataa Zindagi..\n' +
            'Kuch Toh Bataa Zindagi\n' +
            'Apna Pataa Zindagi..\n' +
            'Taaron Bhari Ek Raat Mein\n' +
            'Tere Khat Padhenge Saath Mein\n' +
            'Kora Jo Panna Reh Gaya\n' +
            'Ek Kaanpte Se Haath Mein\n' +
            'Thodi Shiqaayat Karna Tu\n' +
            'Thodi Shiqayat Main Karun\n' +
            'Naraaz Bas Na Hona Tu,\n' +
            'Zindagi…\n' +
            'Kuch To Bata Zindagi\n' +
            'Apna Pataa Zindagi..\n' +
            'Kuch Toh Bataa Zindagi\n' +
            'Apna Pataa Zindagi..\n' +
            'Tu Hai To Main Hoon..\n' +
            'Tu Hai To Main Hoon..\n' +
            'Tu Hai To Khuda\n' +
            'Tu Hai To Rab\n' +
            'Tu Hai Toh Falak\n' +
            'Tu Hai Toh Zameen X 5\n' +
            'Oho..'
        },
        {
            name:"Tere Sang Yaara",
            artist:"Atif aslam",
            album:"Rustam",
            duration:"4:51",
            url:"http://s1.hulkshare.com/song_images/original/3/3/0/3300da097381b691b8c45a7fcec93ee1.jpg?dd=1471168193",
            songfile:'song2.mp3'
        },
        {
            name:"Tinka Tinka dil mera",
            artist:"Rahat fateh ali khan",
            album:"Tubelight",
            duration:"5:02",
            url:"https://cover.djpunjab.com/40039/300x300/Tinka-Tinka-Dil-Mera-(Tubelight)-Rahat-Fateh-Ali-Khan.jpg",
            songfile:'song3.mp3'
        },
        {
            name:"Akad",
            artist:"Ranjit bawa",
            album:"Bhalwan Singh",
            duration:"3:29",
            url:"https://cover.djpunjab.com/40917/300x5/Aakad_(Bhalwan_Singh)_Ranjit_Bawa.jpg",
            songfile:'song4.mp3'
        }
    ];

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
            if (song.src.search(songsinfo[index].songfile) === -1){
                song.src = songsinfo[index].songfile;
                var current_song= $('.current-song-wrapper');
                current_song.find('img').attr('src', songsinfo[index].url);        // for image in current play
                current_song.find(' .current-song-album').text(songsinfo[index].album); //for album name in current play
                current_song.find(' .current-song-name').text(songsinfo[index].name); // for song name in current play
                togglemusic();
            }else {
                togglemusic();
            }
        });
    }
    for (var i=1 ;i<=songsinfo.length;i++){
        onclick_play('#song'+ i, i-1);
    }
    $('.current-song-name').hover(function () {
        $('.song-lyrics').text(songsinfo[0].lyrics1);
        $('.song-lyrics').css('display','inline-block');
    }, function () {
        $('.song-lyrics').css('display','none')
        }
    )



});