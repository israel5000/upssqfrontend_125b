/*in the initial design breif*/
let randomNumber=Math.floor(Math.random()   *   100)+1
const guesses=document.querySelector(".guesses")
const lastResult=document.querySelector(".lastResult")
const lowOrHigh=document.querySelector(".lowOrHigh")
const guesseSubmit=document.querySelector("guesseSubmit")

const guessField=document.querySelector(".guessfield")
let guessCount=1
let resetButton;

function checkGuess(){
    // console.log("I am a placeholder")
    const userGuess = Number(gessesfield.value);
    // conditional if statement
    if(guessCount==1){
        guesses.textContent="previous guesses:"
    }
    guessCount.textContent`${guessCount.textContent} ${userGuess}`;
    //another if  conditional statement
    if(userGuess===randomNumber){
        lastResult.textContent="Congratulations! you got it right"
        lastResult.style.backgroundColour="green"
        lowOrHigh.textContent="";
        setGameOver()
    }else if(guessCount==10){
    lastResult.textContent="!!!GAME OVER!!!";
    lowOrHigh.textContent="";
    setGameOver()
    }else{
        lastResult.textContent="run";
        lastResult.style.backgroundColour="red";
        if(userGuess<randomNumber){
        lowOrHigh.textContent="last guess was too low";
     }else if(userGuess>randomNumber){
        lowOrHigh.textContent="last guess was too high"
     }
    }
    guessCount++
    guessfield.value="";
    gessesfield.focus();
    guesseSubmit.addEventListener("click",checkGuess)
}
function setGame(){
    guessField.disable=true;
    guesseSubmit.disable=true
    resetButton=document.createElement("button")
    resetButton.textContent="start new game"
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame)
}
function resetGame(){
    guessCount=1
    const resetParas=document.querySelectorAll(".resetParas-p")
    // for loop
    for(const resetPara of resetParas){
        resetPara.textContent=""
    }
    resetButton.parentNode.remove(resetButton);
    guessField.disable=false;
    guesseSubmit.disable=false;
    guessField.value="";
    guessField.focus()
    lastResult.style.backgroundColour="white";
    randomNumber=Math.floor(Math.random()*100) + 1
}
console.log(guesses)