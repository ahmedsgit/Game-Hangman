const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const finalMessage = document.getElementById('final-message');
const notification = document.getElementById('notification-container');

const player = document.getElementById('player');
const playerPopup = document.getElementById('player-popup');
const singlePlayerBtn = document.getElementById('single-player');
const multiplePlayerBtn = document.getElementById('multiple-player');
const singlePlayerPopup = document.getElementById('single-player-popup');
const person = document.getElementById('person');
const animal = document.getElementById('animal');
const fruits = document.getElementById('fruits');
const sports = document.getElementById('sports');

const figureParts = document.querySelectorAll('.figure-part');
const correctLetters = [];
const wrongLetters = [];
var audio;
// Audio part
function backgroundMusicPlay() {
    audio = new Audio('../resources/audios/background.mp3');
    audio.play();
}

function backgroundMusicStop() {
    audio.pause();
    audio.currentTime = 0;
}

function clickMusic() {
    var audio = new Audio('../resources/audios/click.mp3');
    audio.play();
}

function winMusic() {
    const win = new Audio('../resources/audios/win.mp3');
    win.play();
}

function lostMusic() {
    const lose = new Audio('../resources/audios/lose.wav');
    lose.play();
}

let words = new Array('hangman');
// Single Player
function getPerson() {
    const personArr = ['sazzad', 'labib', 'monir', 'asif'];
    personArr.forEach(i => words.push(i));
    player.style.display = 'none';
}

function getAnimals() {
    const animalArr = ['lion', 'monkey', 'tiger', 'cat'];
    animalArr.forEach(i => words.push(i));
    player.style.display = 'none';
}

function getFruits() {
    const fruitsArr = ['lichi', 'jakfruit', 'mango', 'banana'];
    fruitsArr.forEach(i => words.push(i));
    player.style.display = 'none';
}

function getSports() {
    const sportsArr = ['cricket', 'football', 'batmintoon', 'swimming'];
    sportsArr.forEach(i => words.push(i));
    player.style.display = 'none';
}

function singlePlayer() {
    playerPopup.style.display = 'none';
    singlePlayerPopup.style.display = 'block';
    // events
    person.addEventListener('click', getPerson);
    animal.addEventListener('click', getAnimals);
    fruits.addEventListener('click', getFruits);
    sports.addEventListener('click', getSports);
    displayWord();
}
let selectedWord = words[Math.floor(Math.random() * words.length)];



//Show Hidden word
function displayWord() {
    wordEl.innerHTML = `${selectedWord.split('')
                        .map(letter=>`<span class="letter">
                                            ${correctLetters.includes(letter) ? letter: ''}
                                        </span>`).join('')
                        }`;
    const innerWord = wordEl.innerText.replace(/\n/g, '');
    if (innerWord === selectedWord) {
        popup.addEventListener('focus', backgroundMusicStop());
        finalMessage.innerText = 'Congratulations! You won! 😃';
        winMusic();
        popup.style.display = 'flex';
    }
}

//Update the wrong correctLetters
function updateWrongLettersEL() {
    // Display wrong letters
    wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

    // Display parts
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if (index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    // Check if lost
    if (wrongLetters.length === figureParts.length) {
        popup.addEventListener('focus', backgroundMusicStop());
        finalMessage.innerText = 'Unfortunately you lost. 😕';
        lostMusic();
        popup.style.display = 'flex';
    }
}

//Show Notifications
function showNotification() {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000)
}
// Keydown letter press
window.addEventListener('keydown', e => {
    // console.log(e.keyCode);
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);

                displayWord();
            } else {
                showNotification();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);

                updateWrongLettersEL();
            } else {
                showNotification();
            }
        }
    }
});

// Player Choice
singlePlayerBtn.addEventListener('click', () => {
    singlePlayer();
})
//Restart game and play again
playBtn.addEventListener('click', () => {
    //Empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();
    updateWrongLettersEL();
    backgroundMusicPlay();
    popup.style.display = 'none';
})

backgroundMusicPlay();
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', clickMusic))