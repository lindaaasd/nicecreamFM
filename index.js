// random background on refresh

function ChangeBgImg(color) 
{
let totalImages = 6;
console.log('sono entrata qui')
let num = Math.ceil( Math.random() * totalImages );
document.body.background = './media/'+color+num+'.jpg';
document.body.style.backgroundSize = "cover";
}


// music to sooth the soul and links

let tracks = [ 
            {title : "B*tch don't kill  my vibe" , artist : "Kendrick Lamar" , color: "green" , url: "./media/audio1.mp3"},
            {title : "RJD2" , artist: "Ghostwritter" , color: "green" , url: "./media/audio2.mp3"},
            {title : "Promises", artist: "Golan" , color: "green" , url: "./media/audio3.mp3"},
            {title: "Trece un nouras" , artist: "Danaga", color: "green" , url: "./media/audio4.mp3"},
        ]



let currentTrack = 0;
// play - pause buttons

const PlayBtn = document.querySelector('#PlayBtn');
const PauseBtn = document.querySelector('#PauseBtn');
const track = document.querySelector('#track');
const trackArtist = document.querySelector('#trackArtist');
const trackTitle = document.querySelector('#trackTitle');
const prewTrackBtn = document.querySelector ('#prewTrackBtn');
const nextTrackBtn = document.querySelector ('#nextTrackBtn');

PlayBtn.addEventListener('click', () =>{
    PlayBtn.classList.toggle('d-none')
    PauseBtn.classList.toggle('d-none')
    track.play()
})

PauseBtn.addEventListener('click', () =>{
    PlayBtn.classList.toggle('d-none')
    PauseBtn.classList.toggle('d-none')
    track.pause()
})

nextTrackBtn.addEventListener('click' , () => {
    nextTrack()
})

function changeTrackDetails(){

    let song = tracks [currentTrack]

    track.src = song.url
    trackTitle.innerHTML = song.title
    trackArtist.innerHTML = song.artist
    

}

function nextTrack(){
    currentTrack++
    if (currentTrack > tracks.length -1){
        currentTrack = 0 
    }

    changeTrackDetails()
}

function prewTrack(){
    currentTrack --
}

changeTrackDetails()





