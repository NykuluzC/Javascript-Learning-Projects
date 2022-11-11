//Simple Program that uses push function

let arrHolder = ["Hello"];
console.log("\t\t\t\t Greeting Board ! for everyone to see");
var loopNum = prompt("Input the amount of greetings you want to add to the message board");

for(var i = 0; i < loopNum; i++)
{
    arrHolder.push(prompt("Enter the greeting that you want to add")); 
   
}

console.log("\t\t\t\t Greeting Board ! for everyone to see");
console.log(arrHolder)