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
            {title : "B*tch don't kill  my vibe" , artist : "Kendrick Lamar" , color: "green" , url: "./media/audio1.mp3", youtube: 'https://www.youtube.com/watch?v=GF8aaTu2kg0', spotify: 'https://open.spotify.com/album/6yHWsogPmlxzfHHR68IQZj?si=u-vx9bUbQIS0BL863dQaDQ', soundCloud: 'https://soundcloud.com/kendrick-lamar-music/bitch-dont-kill-my-vibe?si=f5bd70f63bfa487a8d6c8cfae1c62b66&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'},
            {title : "RJD2" , artist: "Ghostwritter" , color: "green" , url: "./media/audio2.mp3", youtube: 'https://youtu.be/rVqAdIMQZlk', spotify: 'https://open.spotify.com/track/5Nn2Dj7OQsGL6pgQ9iIzPp?si=723885e58c9944ee',soundCloud: 'https://soundcloud.com/mranonymas/rjd2-ghostwriter?si=d3c5c39146ce4420a26dfee28778ce19&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'},
            {title : "Promises", artist: "Golan" , color: "green" , url: "./media/audio3.mp3", spotify: 'https://open.spotify.com/track/3P92FfahxvzQeReiKjSakq?si=158dd371c02e42e0' , youtube: 'https://youtu.be/NXrgb-cPL68', soundCloud: 'https://soundcloud.com/golansound/golan-promises?si=5c1d58ba8eff4ef48e2a5dd621cdb156&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'},
            {title: "Trece un nouras" , artist: "Danaga", color: 'green' ,url: "./media/audio4.mp3", spotify: 'https://open.spotify.com/track/7MWjqlQOYXnJw3p8zNd3ag?si=0dd2d324e12d4076', youtube: 'https://youtu.be/DArsOkFIrHY', soundCloud: 'https://soundcloud.com/poyzzone/danaga-surorile-osoianu-trece-un-nouras?si=fcad20f56c0e40769a4f9b27589bb0ff&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'},
            {title: 'Killing In The Name', artist: 'Rage against the machine', color: 'red', url: './media/audio5.mp3', spotify: 'https://open.spotify.com/track/59WN2psjkt1tyaxjspN8fp?si=2e0f2f07f72a4de3', soundCloud: 'https://soundcloud.com/diyrockshop/killing-in-the-name-of-rage-against-the-machine?si=dd188fef15254a0a83419fa1c233ff90&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', youtube: 'https://youtu.be/bWXazVhlyxQ'},
            {title: 'Walk', artist: 'Pantera', color: 'red', url:'./media/audio6.mp3', youtube:'https://youtu.be/AkFqg5wAuFk', soundCloud:'https://soundcloud.com/pantera/walk-2?si=51f5a65686694fb19465df2d302ae7bb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', spotify:'https://open.spotify.com/track/7fcfNW0XxTWlwVlftzfDOR?si=4e8a8f67d7884e65'},
            {title: 'Hate the police', artist: 'Mudhoney', color: 'red', url:'./media/audio7.mp3', soundCloud:'https://soundcloud.com/mudhoneyofficial/hate-the-police?si=98a63b0245e14567899cb556d304d48d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', youtube: 'https://youtu.be/Qp7P_S3AipI', spotify: 'https://open.spotify.com/track/17lJiJ6NuBY6VHeEUVL2be?si=eef28a734f1d4358'},
            {title: 'Rise Above', artist: 'Black Flag', color: 'red', url: './media/audio8.mp3', spotify: 'https://open.spotify.com/track/4kFfFe38CRVnTsakUTL4E4?si=b2fd80f894dc4f69', youtube: 'https://youtu.be/xHR-rzUjCzU', soundCloud:'https://soundcloud.com/blackflagofficial/rise-above?si=04d43cfe2b11492e94f6da5a5d8c6207&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'},
        ]



let currentTrack = 3;

// play - pause buttons

const PlayBtn = document.querySelector('#PlayBtn');
const PauseBtn = document.querySelector('#PauseBtn');
const track = document.querySelector('#track');
const trackArtist = document.querySelector('#trackArtist');
const trackTitle = document.querySelector('#trackTitle');
const prewTrackBtn = document.querySelector ('#prewTrackBtn');
const nextTrackBtn = document.querySelector ('#nextTrackBtn');
const progressTimeHorizontal = document.querySelector ('#progressTimeHorizontal');
const progressTimeVertical = document.querySelector ('#progressTimeVertical');
const youtubeBtn = document.querySelector ('#youtubeBtn')
const spotifyBtn = document.querySelector ('#spotifyBtn')
const soundCloudBtn = document.querySelector ('#soundCloudBtn')


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

prewTrackBtn.addEventListener('click' , () => {
    prewTrack()
})

track.addEventListener('ended' , ()  =>
    nextTrack())

track.addEventListener('timeupdate' , () => {
    updateProgress()
}
)

youtubeBtn.addEventListener('click', () =>
{   
    openNewTab(tracks[currentTrack].youtube)}
)

spotifyBtn.addEventListener('click', () =>
{  
    openNewTab(tracks[currentTrack].spotify)}
)

soundCloudBtn.addEventListener('click', () =>
{   
    openNewTab(tracks[currentTrack].soundCloud)}
)

function openNewTab (newUrl) {
window.open(newUrl, '_blank')}

function changeTrackDetails(){
debugger
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

    let playing = !track.paused

    changeTrackDetails()

    if(playing){
        track.play()
    }
}

function prewTrack(){
    currentTrack --
    
    if (currentTrack < 0){
        currentTrack = tracks.length -1
    }

    let playing = !track.paused

    changeTrackDetails()

    if(playing){
        track.play()
    }
}

function updateProgress (){
    let progress = (track.currentTime / track.duration) * 100
    progressTimeHorizontal.style.width = progress + '%'
    progressTimeVertical.style.height = progress + '%'
}


function ChangeTrackMoods(color){        
    let newTracks = []
    tracks.forEach(track => {
    if(track.color == color){
        newTracks.push(track)
    }
}) 

tracks = newTracks;

changeTrackDetails()

}



// solar animation

