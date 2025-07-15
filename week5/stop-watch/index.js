// get all span Element
const time1 = document.querySelector(".hours")
const time2 = document.querySelector(".minuite")
const time3 = document.querySelector(".seconds")
const stopTimmer = document.querySelector(".stopTimer")
const startTimmer = document.querySelector(".startTimer")
const resetTimmer = document.querySelector(".resetTimer")


let seconds = 0;
let hours = 0;
let minuite = 0;
let intervalId = null;

const myTimer = () =>{
    intervalId = setInterval(
        () => {
            if (seconds === 60){
                seconds = 0
                minuite++
                time2.textContent = minuite<10 ? "0" +minuite : minuite
            }else if(minuite === 60){
                minuite = 0
                hours++
                time1.textContent = hours<10 ? "0" +hours : hours
            }
            time3.textContent=seconds<10 ? "0" +seconds : seconds
            seconds++
        },1000
    )
}
startTimmer.addEventListener("click",() =>{
    myTimer()
})

// class Animal{
//     name;
//     constructor(name){
//         this.name = name
//     }
//     speak(){
//         console.log(`${this.name}makes a sound`)
//     }
// }
     
//  const elephant = new Animal("elephant")
//  elephant.speak();


// let sum = 0
// setInterval(
//     () =>{
//         console.log(sum)
//         sum+=1
//     },
//     1000
// )
