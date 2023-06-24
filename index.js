let randomNumber = Math.floor(Math.random() * 6) + 1


let randomNumber1 = "dice" + randomNumber + ".png";

let random1 = "images/" + randomNumber1;

let value = document.querySelectorAll("img")[0];

value.setAttribute("src", random1);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomNum2 = "dice" + randomNumber2 + ".png";

let random2 = "images/" + randomNum2;

let value2 = document.querySelectorAll("img")[1];

value2.setAttribute("src", random2);

if(randomNumber > randomNumber2){
    document.getElementById("ref").innerText= "Player 1 wins"
}   else if(randomNumber < randomNumber2){
    document.getElementById("ref").innerText= "Player 2 wins"
}   else{
    document.getElementById("ref").innerText= "Draw"
}