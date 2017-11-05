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
            lyrics:'Ek Din Mohabbat Odh Kar\n' +
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
            'Zindagi…\n'
        },
        {
            name:"Tere Sang Yaara",
            artist:"Atif aslam",
            album:"Rustam",
            duration:"4:51",
            url:"http://s1.hulkshare.com/song_images/original/3/3/0/3300da097381b691b8c45a7fcec93ee1.jpg?dd=1471168193",
            songfile:'song2.mp3',
            lyrics:'Tere sang yaara\n' +
            'Khush rang bahara\n' +
            'Tu raat deewani\n' +
            'Main zard sitara\n' +
            '\n' +
            'O karam khudaya hai\n' +
            'Tujhe mujhse milaya hai\n' +
            'Tujhpe marke hi toh\n' +
            'Mujhe jeena aaya hai\n' +
            '\n' +
            'O tere sang yaara\n' +
            'Khushrang bahara\n' +
            'Tu raat deewani\n' +
            'Main zard sitara\n' +
            '\n' +
            'O tere sang yaara\n' +
            'Khushrang bahara\n' +
            'Main tera ho jaun\n' +
            'Jo tu karde ishara\n' +
            '\n' +
            'Kahi kisi bhi gali mein jaaun main\n' +
            'Teri khushbu se takraun main\n' +
            'Har raat jo aata hai mujhe\n' +
            'Woh khwab tu..\n' +
            '\n' +
            'Tera mera milna dastoor hai\n' +
            'Tere hone se mujhme noor hai\n' +
            'Main hoon soona sa ek aasmaan\n' +
            'Mehtaab tu..\n' +
            '\n'

        },
        {
            name:"Tinka Tinka dil mera",
            artist:"Rahat fateh ali",
            album:"Tubelight",
            duration:"5:02",
            url:"https://cover.djpunjab.com/40039/300x300/Tinka-Tinka-Dil-Mera-(Tubelight)-Rahat-Fateh-Ali-Khan.jpg",
            songfile:'song3.mp3',
            lyrics:'Tinka tinka dil mera\n' +
            'Teri lau mein jalta hai\n' +
            'Jaaye tu chaahe kahin\n' +
            'Mere dil mein dhalta hai\n' +
            '\n' +
            '\n' +
            'Katra katra dil mera\n' +
            'Tere raah mein behta hai\n' +
            'Jaaye tu chaahe kahin\n' +
            'Mere dil mein rehta hai\n' +
            '\n' +
            'O… wo o…\n' +
            '\n' +
            'Teri ikk-ikk karke yaadein aati hain\n' +
            'Meri ikk-ikk karke saansein jaati hain\n' +
            'Yeh meri aah jo kabhi kahin nikal jaaye\n' +
            'Maange bas ikk jhalak teri kahin toh mil jaaye\n' +
            '\n' +
            'Tukda tukda dil mera\n' +
            'Tera rastaa takta hai\n' +
            'Jaaye tu chaahe kahin\n' +
            'Mere dil mein thamta hai\n' +
            '\n'
        },
        {
            name:"Akad",
            artist:"Ranjit bawa",
            album:"Bhalwan Singh",
            duration:"3:29",
            url:"https://cover.djpunjab.com/40917/300x5/Aakad_(Bhalwan_Singh)_Ranjit_Bawa.jpg",
            songfile:'song4.mp3',
            lyrics:'Nikke nikke cha maarde ne kilkaariyan,\n' +
            'Khwaban vich rehn mere sehre phulkaariyan,\n' +
            'Haan nikke nikke cha maarde ne kilkaariyan,\n' +
            'Khwaban vich rehn mere sehre phulkaariyan,\n' +
            '\n' +
            'Oh pabb nachde,\n' +
            'Pabb nachde bhoein na lagde,\n' +
            'Ni udoo udoo chit karda,\n' +
            '\n' +
            'Gal mann le,\n' +
            'Gal mann le aakad hunn bhan le,\n' +
            'Ni tere bajon nayi sarda haye,\n' +
            'Ni tere bajon nayi sarda,\n' +
            '\n' +
            'Aashiqui ishq kehde kamma vichon kamm ne,\n' +
            'Chung leke la le jehde ginti de damm ne...,\n' +
            '\n'
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
                displaylyrics(index);   //calling displaylyrics funtion
                togglemusic();
            }else {
                togglemusic();
            }
        });
    }
    for (var i=1 ;i<=songsinfo.length;i++){
        onclick_play('#song'+ i, i-1);
    }

    function displaylyrics(index1) {
        $('.current-song-name').hover(function () {
                var song_lyrics_selector=$('.song-lyrics');
                song_lyrics_selector.text(songsinfo[index1].lyrics);
                song_lyrics_selector.css('display', 'inline-block');
            }, function () {
                $('.song-lyrics').css('display', 'none')
            }
        )
    }



});