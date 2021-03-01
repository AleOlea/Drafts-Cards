/*const startGame = document.getElementById("startGame")
startGame.addEventListener("click", clickbtnStart);



//suffle cards
// start timer
function clickbtnStart() {
    /* Randomize array in-place using Durstenfeld shuffle algorithm */


/*const pokeball = ["bulbasaur", , "ivysaur", , "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", , "blastoise", ]
const pokeballTwo = ["bulbasaur2", "ivysaur2", "venusaur2", "charmander2", "charmeleon2", "charizard2", "squirtle2", "wartortle2", "blastoise2"]

function shuffleArray(pokeball, pokeballTwo ) {
    for (let i = pokeball.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pokeball[i], pokeballTwo[j]] = [pokeballTwo[j], pokeball[i]];
        return shuffleArray
    }
}
console.log(shuffleArray)*/

//empty the openCards array



//shuffles cards when page is refreshed



const pokeball = ["bulbasaur", , "ivysaur", , "venusaur", "charmander", "charmeleon", "charizard", "squirtle",
    "wartortle", , "blastoise", "bulbasaur2", "ivysaur2", "venusaur2", "charmander2", "charmeleon2", "charizard2", "squirtle2", "wartortle2", "blastoise2"
]


function shuffle(pokeball) {
    pokeball.sort(() => Math.random() - 0.5);
}

shuffle(pokeball);
console.log(pokeball)







// @description game timer
document.getElementsByClassName(timer)
let second = 0,
    minute = 0;
hour = 0;
let timer = document.querySelector(".timer");
let interval;

function startTimer() {
    interval = setInterval(function() {
        timer.innerHTML = minute + "mins " + second + "secs";
        second++;
        if (second === 60) {
            minute++;
            second = 0;
        }
        if (minute === 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}