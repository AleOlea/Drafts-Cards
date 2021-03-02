const pokeCards = [{
    id: 'bulbasaur',
    image: 'https://www.serebii.net/pokemongo/pokemon/001.png',
    bgColor: '#339933'
}, {
    id: 'ivysaur',
    image: 'https://www.serebii.net/pokemongo/pokemon/002.png',
    bgColor: '#339933'
}, {
    id: 'venusaur',
    image: 'https://www.serebii.net/pokemongo/pokemon/003.png',
    bgColor: '#339933'
}, {
    id: 'charmander',
    image: 'https://www.serebii.net/pokemongo/pokemon/004.png',
    bgColor: '#F05032'
}, {
    id: 'charmeleon',
    image: 'https://www.serebii.net/pokemongo/pokemon/005.png',
    bgColor: '#F05032'
}, {
    id: 'charizard',
    image: 'https://www.serebii.net/pokemongo/pokemon/006.png',
    bgColor: '#F05032'
}, {
    id: 'squirtle',
    image: 'https://www.serebii.net/pokemongo/pokemon/007.png',
    bgColor: '#1572B6'
}, {
    id: 'wartortle',
    image: 'https://www.serebii.net/pokemongo/pokemon/008.png',
    bgColor: '#1572B6'
}, {
    id: 'blastoise',
    image: 'https://www.serebii.net/pokemongo/pokemon/009.png',
    bgColor: '#1572B6'
}, ]

//import these items from my src on Work on GiuHub

//shuffles cards when page is refreshed
const pokeNames = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle",
    "wartortle", "blastoise", "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise"
]

const startGame = document.getElementById("startGame");
startGame.addEventListener("click", function() {
    firstCardIndex = -1;
    cards.forEach(card => cards); //MY ADD
    console.log("game on"); //MY ADD
    //if negative resutl then do  nothing if postive swap the items -0.5 and 0.5 
    function shuffle(pokeball) {
        pokeball.sort(() => Math.random() - 0.5);
    }
    //to print index and name of card
    shuffle(pokeNames);
    pokeNames.forEach((name, index) => console.log(index, name))
})

//ver imagenes 
function turnCard(e, id) {
    e.target.innerText = pokeNames[id]
}

let firstCardIndex = -1;
let score = 0;
const cardsDiv = document.getElementsByClassName("memory-cards")[0]; //why index 0?
let cards = Array.from(cardsDiv.children)

cards.forEach((card, i) => card.addEventListener("click", function(e) {
    /*console.log(i)*/
    const imageUrl = pokeCards.find(item => item.id === pokeNames[i]).image;
    card.style.backgroundImage = `url("${imageUrl}")`
    if (firstCardIndex === -1) {
        firstCardIndex = i;
    } else {
        if (pokeNames[firstCardIndex] === pokeNames[i]) {
            score += 1
            console.log("Score is:", score) // crear box that shows score
        } else {
            const oldFirstCardIndex = firstCardIndex;
            setTimeout(function() {
                //__________________________---------------------------___________________________________________________________
                cards[oldFirstCardIndex].style.backgroundImage = /*`url("bola.png")`*/ `url("ball.png")`;
                cards[i].style.backgroundImage = `url("ball.png")` /*`url("bola.png")`*/ ;
            }, 1500);
        }
        firstCardIndex = -1;

    }

}));