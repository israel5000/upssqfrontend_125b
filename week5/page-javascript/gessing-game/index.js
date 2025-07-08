/*in the initial design breif*/
let randomNumber=Math.floor(Math.random()   *   100)+1
const guesses=document.querySelector(".guesses")
const lastResult=document.querySelector(".lastResult")
const lowOrHigh=document.querySelector(".lowOrHigh")
const guesseSubmit=document.querySelector(".guesseSubmit")

const guessfield=document.querySelector("#guessfield")
let guessCount=1
let resetButton;

function checkGuess(){
    console.log("I am a placeholder")
    const userGuess = Number(guessfield.value);
    // conditional if statement
    if(guessCount==1){
        guesses.textContent="previous guesses:"
    }
    guesses.textContent=`${guesses.textContent} ${userGuess}`;
    //another if  conditional statement
    if(userGuess===randomNumber){
        lastResult.textContent="Congratulations! you got it right"
        lastResult.style.backgroundColor="green"
        lowOrHigh.textContent="";
        setGameOver()
    }else if(guessCount==10){
    lastResult.textContent="!!!GAME OVER!!!";
    lowOrHigh.textContent="";
    setGameOver()
    }else{
        lastResult.textContent="wrong";
        lastResult.style.backgroundColor="red";
        if(userGuess<randomNumber){
        lowOrHigh.textContent="last guess was too low";
     }else if(userGuess>randomNumber){
        lowOrHigh.textContent="last guess was too high"
     }
    }
    guessCount++
    guessfield.value="";
    guessfield.focus();
    
}
guesseSubmit.addEventListener("click",checkGuess)
function setGameOver(){
    guessfield.disable=true;
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
    guessfield.disable=false;
    guesseSubmit.disable=false;
    guessfield.value="";
    guessfield.focus()
    lastResult.style.backgroundColour="white";
    randomNumber=Math.floor(Math.random()*100) + 1
}
