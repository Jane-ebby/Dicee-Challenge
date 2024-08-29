
let randomNumber1 = Math.floor(Math.random() * 7) //1-6

let randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);



let randomNumber2 = Math.floor(Math.random() * 7);

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins"
}
else {
    document.querySelector("h1").innerHTML = "Draw"
}