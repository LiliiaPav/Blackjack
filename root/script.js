let showCards= document.getElementById('cards');
let showSum= document.getElementById('sum');
let result= document.getElementById('result');
let moreBut=document.getElementById('hidden');
let finishBut=document.getElementById('finish');
let score=document.getElementById('score');
let allCards =0;

// Returns a random integer from 2 to 11:
function createDeck(){
    let firstCard = Math.floor(Math.random() * 10 +2);  
    let secondCard = Math.floor(Math.random() * 10 +2);
    allCards = [firstCard, secondCard]
}

function newGame(){
    score.innerText='';
    result.innerText='';
    createDeck();
    playGame();
}

function playGame(){
    console.log( allCards)
    let text='';
    let userSum=0;
    allCards.forEach( num => {
        userSum += num;
        text += num+' ';
      })

    
    showCards.innerText = text;
    showSum.innerText=userSum;

    if (userSum===21){
        result.innerText="Wohoo! You've got Blackjack";
        moreBut.classList.add('hide');
        finishBut.classList.add('hide');
    }
    else if (userSum>21){
        result.innerText="You're out of the game!"
        moreBut.classList.add('hide');
        finishBut.classList.add('hide');
    }
    else if (userSum<21){
        result.innerText="Take one card?"
        moreBut.classList.remove('hide');
        finishBut.classList.remove('hide');
    }

}

function oneMore(){
    let newCard=Math.floor(Math.random() * 10 +2); 
    allCards.push(newCard)
    playGame();
}

function finish(){
    let userSum=0;
    allCards.forEach( num => {
        userSum += num;
      })
    let compGame=0
    let comp1 = Math.floor(Math.random() * 10 +2);  
    let comp2 = Math.floor(Math.random() * 10 +2);
    compGame=comp1+comp2

    if (compGame<11){compGame+=Math.floor(Math.random() * 10 +2)}

    let text = `Computer has ${compGame}`
    result.innerText=text;
    console.log(userSum, compGame)
    if(userSum===21){
        score.innerText+="Wohoo! You've got Blackjack"}
    else if (userSum===compGame){
        score.innerText+="Tie!"}
    else if (userSum>compGame){
        score.innerText+="Wohoo! You've won!"}
    else if (compGame===21){
        score.innerText+="Computer's got Blackjack. You lost"}
    else  {score.innerText+="You lost"}

    moreBut.classList.add('hide');
    finishBut.classList.add('hide');

}