// Guessing Game
let numberOfWon=0;
let numberOfLost=0;
for (let x=1;x<=5; x++)
{
let guessingNum=parseInt(prompt("Enter The Number From 1 to 5: "));
let numGuessing=Math.floor(Math.random()*6);
if (guessingNum==numGuessing){
    document.write("<h4> You Have Won. The Number Is ="+numGuessing+"<br></h4>");
    numberOfWon++
}
else{
    document.write("<h4>You Have lost.Try Again next time.The Number Is ="+numGuessing+"<br></h4>");
    numberOfLost++;
}
}
document.write("<h2>Total Number Of Won = " +numberOfWon+"<br><h2>");
document.write("<h2>Total Number Of Lost = " +numberOfLost+"<br><h2>");