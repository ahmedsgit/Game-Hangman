let singlePlayerBtn = document.getElementById('singlePlayer');
let multiplePlayerBtn = document.getElementById('multiplePlayer');
let home = document.querySelector('.home');
let introP = document.getElementById('introPage');
let singlePlayerPage = document.getElementById('single-player-page');
let multiplePlayerPage = document.getElementById('multiple-player-page');

// form
let input = document.getElementById('input')
let submitBtn = document.getElementById('submit');


function clickAudio() {
    var audio = new Audio('../resources/audios/click.mp3');
    audio.play();
}

//initially all page will be invisible exp intro page
singlePlayerPage.style.display = 'none';
multiplePlayerPage.style.display = 'none';

function introPage() {
    clickAudio();
    singlePlayerPage.style.display = "none";
    multiplePlayerPage.style.display = "none";
    introP.style.display = "block";
}

function singlePlayer() {
    clickAudio();
    introP.style.display = "none";
    singlePlayerPage.style.display = "block";
}

function multiplePlayer() {
    clickAudio();
    introP.style.display = "none";
    multiplePlayerPage.style.display = "block";
}

function submitValue() {
    console.log(input.value);
}


//Events
singlePlayerBtn.addEventListener('click', singlePlayer);
multiplePlayerBtn.addEventListener('click', multiplePlayer);
home.addEventListener('click', introPage);
submitBtn.addEventListener('click', submitValue);