'use strict';

function testEvent(event){
    let myButton = event.target.textContent;
    screen.textContent += myButton;
    console.log(screen.textContent);
    if (myButton == "=") {
        let resultat = screen.textContent.length-1;
        screen.textContent = eval(resultat);
        console.log(screen.textContent);
    } else if (myButton == "AC") {
        screen.textContent = " ";
    }
}

let screen = document.querySelector(".resultat"); 
let calculatrice = document.querySelector(".container"); 

calculatrice.addEventListener("click",testEvent);