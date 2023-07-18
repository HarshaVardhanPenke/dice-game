var randomNumber1=Math.floor(Math.random()*6+1);
var randomImage1Scr="dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomImage1Scr);
var randomNumber2=Math.floor(Math.random()*6+1);
var randomImage2Scr="dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomImage2Scr);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!"
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Match drawn";
}
else{
    document.querySelector("h1").innerHTML="🚩 Player 2 wins!"
}