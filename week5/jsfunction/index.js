const cat = document.getElementById("cat")
const dog = document.getElementById("dog")
const cow = document.getElementById("cow")
console.log(cow)
console.log(dog)
console.log(cat)
function mycat(n1 ,n2 ,n3){
    cat.textContent=n1
    dog.textContent=n2
    cow.textContent=n3
}
const can = (mycat("israel","daniel","prudence"))

alert("hello")