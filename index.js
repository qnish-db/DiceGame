var r1 = Math.floor(Math.random() * 6) + 1;
var r2 = Math.floor(Math.random() * 6) + 1;

var  a = "images/dice"+r1+".png";
document.querySelector(".img1").setAttribute("src", a);

var  b = "images/dice"+r2+".png";
document.querySelector(".img1").setAttribute("src", b);



if(r1 === r2){
    document.querySelector("h1").textContent = "Draw";
}
else if(r1 > r2){
    document.querySelector("h1").textContent = "Player 1 wins!";
}
else{
    document.querySelector("h1").textContent = "Player 2 wins!";
}