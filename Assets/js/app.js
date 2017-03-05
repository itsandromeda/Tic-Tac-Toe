/*global document, window, alert, startGame, checkWinner*/
/*jslint eqeq: true*/
var button1 = document.getElementById("1"),
    button2 = document.getElementById("2"),
    button3 = document.getElementById("3"),
    button4 = document.getElementById("4"),
    button5 = document.getElementById("5"),
    button6 = document.getElementById("6"),
    button7 = document.getElementById("7"),
    button8 = document.getElementById("8"),
    button9 = document.getElementById("9"),
    startOver = document.getElementById("newGame"),
    board = document.getElementsByClassName("board"),
    gameStatus = false, //no winner
    i;

function startGame() {
    if (gameStatus === false) { //if no winner
        this.setAttribute("value", "x"); //draw X in button in context
        checkWinner(); //check
        gameStatus = true; //next turn
        return true;
    }
    if (gameStatus === true) {
        this.setAttribute("value", "o"); //draw O in button in context
        checkWinner(); //check
        gameStatus = false; //next turn
    }
}

function checkWinner() {
    "use strict";
    if (((button1.value == "x") && (button2.value == "x") && (button3.value == "x")) || ((button4.value == "x") && (button5.value == "x") && (button6.value == "x")) || ((button7.value == "x") && (button8.value == "x") && (button9.value == "x")) || ((button1.value == "x") && (button4.value == "x") && (button7.value == "x")) || ((button2.value == "x") && (button5.value == "x") && (button8.value == "x")) || ((button3.value == "x") && (button6.value == "x") && (button9.value == "x")) || ((button1.value == "x") && (button5.value == "x") && (button9.value == "x")) || ((button3.value == "x") && (button5.value == "x") && (button7.value == "x"))) {
        alert("❌ wins!✨ :D");
        return true; //winner
    }
    
    if (((button1.value == "o") && (button2.value == "o") && (button3.value == "o")) || ((button4.value == "o") && (button5.value == "o") && (button6.value == "o")) || ((button7.value == "o") && (button8.value == "o") && (button9.value == "o")) || ((button1.value == "o") && (button4.value == "o") && (button7.value == "o")) || ((button2.value == "o") && (button5.value == "o") && (button8.value == "o")) || ((button3.value == "o") && (button6.value == "o") && (button9.value == "o")) || ((button1.value == "o") && (button5.value == "o") && (button9.value == "o")) || ((button3.value == "o") && (button5.value == "o") && (button7.value == "o"))) {
        alert("⭕️ wins!✨ :D");
        return true; //winner
    }
    
    if ((button1.value == "x" || button1.value == "o") && (button2.value == "x" || button2.value == "o") && (button3.value == "x" || button3.value == "o") && (button4.value == "x" || button4.value == "o") && (button5.value == "x" || button5.value == "o") && (button6.value == "x" || button6.value == "o") && (button7.value == "x" || button7.value == "o") && (button8.value == "x" || button8.value == "o") && (button9.value == "x" || button9.value == "o")) {
        alert("⚡️ It's a DRAW! ⚡️ :O");
        return true; //draw
    }
}

function newGame() {
    "use strict";
    button1.setAttribute("value", "+");
    button2.setAttribute("value", "+");
    button3.setAttribute("value", "+");
    button4.setAttribute("value", "+");
    button5.setAttribute("value", "+");
    button6.setAttribute("value", "+");
    button7.setAttribute("value", "+");
    button8.setAttribute("value", "+");
    button9.setAttribute("value", "+");
}

for (i = 0; i < board.length; i += 1) {
    board[i].addEventListener("click", startGame);
}

startOver.addEventListener("click", newGame);