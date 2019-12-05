window.addEventListener('load', init)

//-------------GLOBAL---------------
const level = {
    easy: 7,
    medium: 5,
    hard: 3
}
//---------CHANGE LEVEL -----------
const currentLevel = level.easy


let time = currentLevel
let score = 0
let isPlaying

//------------DOM ELEMENT-------------
const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')


const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'biscuit',
    'delay',
    'attend',
    'fixed',
    'frightened',
    'developer',
    'urban',
    'characteristics',
    'complete',
    'graduation',
    'university',
    'education',
    'instruction',
    'mandatory',
    'nervous',
    'establishment',
    'nutrition',
    'recover',
    'stimulus',
    'investigate',
    'symptom',
    'definition',
    'laughter',
    'echo',
    'love',
    'plagiarize',
    'fortunate',
    'outstanding',
    'infiltrate',
    'photosynthesis',
    'chromosome',
    'combustion',
    'filter'
]

//-----------------Initialize Game -------------
function init(){
    showWord(words)
    setInterval(countdown, 1000)
    setInterval(checkStatus, 50)
    wordInput.addEventListener('input', startMatch)
    seconds.innerHTML = currentLevel
}


//----------pick and show random words--------
function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length)
    currentWord.innerHTML = words[randIndex]
}

//countdown timer
function countdown(){
    if(time > 0){
        time--
    }else if(time === 0){
        isPlaying = false
    }
    timeDisplay.innerHTML = time
}

//-------------check game interval ----------------
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!!!'
        score = -1
    }
}

//Start match
function startMatch(){
    if(matchWords()){
        isPlaying =  true       
        time = currentLevel + 1
        showWord(words)
        wordInput.value = ''
        score++
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0
    }else{
        scoreDisplay.innerHTML = score
    }
   
}

//Match current words
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!!'
        return true
    }else{
        message.innerHTML = ''
        return false
    }
}

