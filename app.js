const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.querySelector('#overlay');
const buttonReset = document.querySelector('a.btn__reset');
let missed = 5;

const phrases = ['four arms', 
                'wildmutt', 
                'heatblast', 
                'upgrade', 
                'ghostfreak',
                'diamondhead',
                'way big'
                ];

buttonReset.addEventListener('click', (e) => {
    overlay.style.display = 'none';
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

function checkWin() {
    let liLetter = document.querySelectorAll('li.letter');
    let liShow = document.querySelectorAll('li.show');
    if(liLetter.length === liShow.length){
        overlay.style.display = 'flex';
        overlay.className ='win';
        overlay.innerHTML = '<h2 class="title">You special. Good!</h2>';

    } else if (missed === 0) {
        overlay.style.display = 'flex';
        overlay.className ='lose';
        overlay.innerHTML = '<h2 class="title">You not special. Bad!</h2>';
    }
    
}

qwerty.addEventListener('click', (e) =>{  
    let targeted = e.target;  
    // if BUTTON was clicked
    if(targeted.tagName === "BUTTON"){
        // add a chosen class to button
        targeted.className = 'chosen';
        // disable button that was chosen
        targeted.disabled = true;
        // check if there's a match using checkLetter(btn)
        checkLetter(targeted);
        // if there's no match: 
        if(checkLetter(targeted) === null) {
            // lose a life 
                // increase the counter
            missed--;
                // replace liveHeart img with lostHeart img
                    // target all the hearts
            let liveHearts = document.querySelectorAll('li.tries img');
                    // replace the rightmost liveHeart with a lostHeart
                        // target the rightmost liveHeart
            let rightLive = liveHearts[missed];
                        // change the src attribute
            rightLive.src = 'images/lostHeart.png';
        }
        checkWin();
    } 
});
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


