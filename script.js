                                             

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages = "dice" + randomNumber1 + ".png"; // Fixed variable name
var randomImageSource = "images/" + randomDiceImages; // Fixed variable name
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource); // Fixed syntax for setAttribute

var randomNumber2= Math.floor(Math.random() * 6) + 1;

var randomImageSource2= "images/" + randomNumber2+".png"; // Fixed variable name

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2); // Fixed syntax for setAttribute


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player1 wins!";
}else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="player2 wins!"

}else{
    document.querySelector("h1").innerHTML="draw"
}
function reloadPage() {
    window.location.reload();
}
