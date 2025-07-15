let appName="upskiillms"; /*global scope*/
function startApp(){
    console.log(appName)
}
startApp;
function sayHi(){
    let name="jane";
    console.log(name)
}
sayHi();  /*this log jane */
console.log(name); //error name is undefined
