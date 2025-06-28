//function:CREATE a new paragrph and append it to the buttom of the html body
// function createParagraph() {
//   const para = document.createElement("p");
//   para.textContent = "You clicked the button!";
//   document.body.appendChild(para);
// }
// const buttons = document.querySelectorAll("button");
// for (const button of buttons) {
//   button.addEventListener("click", createParagraph);
// }
const buttons = document.querySelectorAll("button");
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}
/*get refreences to all the buttons on the page in an rray formrt*/ 
//look through all the buttons and add a click eventlisner when any botton is pressed the crete paragraph fuction will be runed 
for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}


