var randumNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randumNumber1 + ".png"; //this is a string from dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // from images/dice1.png- images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randumNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomDiceImage2 = "dice" + randumNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randumNumber1 > randumNumber2){
   document.querySelector("h1").innerHTML = "Player 1 is the winner";
}else if(randumNumber2 > randumNumber1){
    document.querySelector("h1").innerHTML = "Player 2 is the winner";
}else{
    document.querySelector("h1").innerHTML = "Draw";    
}