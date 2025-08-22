/*-------------- Constants -------------*/
const totalPairs = 6;


const soundGame = [
    {name: "correctMp", sound: new Audio("Sounds/mixkit-correct-positive-notification-957.wav")},
    {name: "victorySound", sound: new Audio("Sounds/mixkit-correct-answer-reward-952.wav")},
    {name: "losingSound", sound: new Audio("Sounds/fail-144746.mp3")},
    {name: "incorrectMp", sound: new Audio("Sounds/error-08-206492.mp3")},

];


const cardArray = [        
  { name: "mushroom", image: "images/image-removebg-preview (1).png" },
  { name: "frog", image: "images/image-removebg-preview (2).png" },
  { name: "tree", image: "images/image-removebg-preview (3).png" },
  { name: "books", image: "images/image-removebg-preview (4).png" },
  { name: "candle", image: "images/image-removebg-preview (5).png" },
  { name: "pumpkin", image: "images/image-removebg-preview (6).png" },
];

let gameCards = [...cardArray, ...cardArray];
shuffle(gameCards);


/*---------- Variables (state) ---------*/
    
    let firstCard= null;
    let secondCard= null;
    let lockBoard = false;
    let matchedPairs = 0;
    let timeLimit = 30;
    let timer = null;

    const cards = document.querySelectorAll(".game-board .card");
    const timeDisplay = document.getElementById("time");
    const messageDisplay = document.getElementById("message");
    const mpDisplay = document.getElementById("mp");
    const  startBtn = document.querySelector(".start-button");

/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/

/// function for mixing the cards
function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {


let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    
[array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

}


const updateTimer = () =>{

    timeDisplay.textContent = timeLimit;
}

const startTimer = () =>{

    updateTimer();
    timer = setInterval (() =>{

        timeLimit--;
        updateTimer();

        if(timeLimit <=0){
            clearInterval(timer);
            lockBoard = true;
            soundGame[2].sound.play();
            messageDisplay.textContent = "Unfortunately, you lost!";
        }
    }, 1000)
}

const endGame = () =>{
 clearInterval(timer);
 lockBoard = true;
 messageDisplay.textContent = "Congratulations, you won!";
}


const check = () =>{

    let isMatch = gameCards[firstCard.index].name === gameCards[secondCard.index].name;

    if(isMatch){
        matchedPairs++;
        mpDisplay.textContent = matchedPairs;
        soundGame[0].sound.play();
        rest();


        if (matchedPairs === totalPairs){
            endGame();
            soundGame[1].sound.play();
            
            
        }

    } else {
        lockBoard = true;
        setTimeout(() =>{
        firstCard.card.classList.remove('flipped')
        secondCard.card.classList.remove('flipped')
        soundGame[3].sound.play();
        rest();
        },1000);
    }
      
}


const rest = () =>{
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}



/*----------- Event Listeners ----------*/

cards.forEach((card, index) => {
    let frontImg = card.querySelector(".front");
    frontImg.setAttribute("src", gameCards[index].image);

  card.addEventListener("click", () => {

    if(lockBoard || card.classList.contains("flipped")){
        return;
    }
    
    card.classList.add("flipped");

    if(!firstCard){
        firstCard = {card, index};
    }else{
        secondCard = {card, index};
        check();
    }

  });
});

startBtn.addEventListener("click", () =>{
    matchedPairs =0;
    mpDisplay.textContent = 0;
    timeLimit = 30;
    messageDisplay.textContent = "";
    clearInterval(timer);
    lockBoard = true;
    

    cards.forEach((card, index) => {
        card.classList.remove("flipped");
        let frontImg = card.querySelector(".front");
        frontImg.setAttribute("src", gameCards[index].image);

        setTimeout(() =>{
            card.classList.add("flipped")
        }, 100);
        })

        setTimeout(()=>{
            cards.forEach((card) =>{
                card.classList.remove("flipped");
            })
            lockBoard = false;
            startTimer();
        }, 3000)
})
