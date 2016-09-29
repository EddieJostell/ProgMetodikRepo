//UPPGIFT 2


//Function 6 tärningar, Funktion som slår 6 tärningar och skriver ut resultatet av tärningarna.

//START
//Funktion sixDice som som ska rulla 6 tärningar
//Variabel för våra tärningar
//for loop för att iterera tärningsslagen
//I loopen slås 6 tärningsvärde fram
//som adderas på varandra.
//Resultatet skrivs ut i console.
//STOP


function sixDice(){
var dice=0
for (i=0;i<6;i++)
{
dice+=Math.ceil(Math.random()*6);

}
console.log ("Rolling 6 dices!")

console.log("You got "+dice+"!");
}
sixDice();

NEINNEINEIENINEINEINEIENEINEINEIENINEINE
