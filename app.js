const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.querySelector('#overlay')
const buttonReset = document.querySelector('a.btn__reset');
const missed = 0;

const phrases = ['four arms', 
                'wildmutt', 
                'heatblast', 
                'upgrade', 
                'ghostfreak',
                'diamondhead',
                'way big'
                ];

buttonReset.addEventListener('click', (e) => {
    overlay.style.display = 'none'
});

function getRandomPhraseAsArray(array) {
    //do stuff to any arr that is passed in
    const index = Math.floor(Math.random() * array.length);
    let randomPhrase = array[index];
    let phraseSplit = randomPhrase.split('');
    return phraseSplit;
}

function addPhraseToDisplay(array){
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        li.textContent = array[i];
        if (array[i] !== ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
        phrase.appendChild(li);
    }
    }

function checkLetter(btn) {
    let match = null;
    const letters = document.querySelectorAll('.letter');
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].textContent === btn.textContent) {
            letters[i].className ='show letter';
            match = letters[i]; 
        }
    }
    return null || match;
}












const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// const letterButtons = document.querySelectorAll ('div.keyrow');

