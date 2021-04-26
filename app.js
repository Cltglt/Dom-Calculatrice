'use strict';

function testEvent(event){
    let myButton = event.target.textContent;
    screen.textContent += myButton;
    console.log(screen.textContent);
    if (myButton == "=") {
        display = eval(screen.textContent);
        screen.textContent = display;
        console.log(screen.textContent);
        console.log("DISPLAY : " + display)
    } else if (myButton == "AC") {
        screen.textContent = "";
    }
}

let display = "";
let screen = document.querySelector(".resultat"); 
let calculatrice = document.querySelector(".container"); 

calculatrice.addEventListener("click",testEvent);