//Simple Program that uses push function and alert function

let arrHolder = ["Hello"];
let arrHolderOutput = [];
console.log("\t\t\t\t Greeting Board ! for everyone to see");
console.log(arrHolder);
var loopNum = prompt("Input the amount of greetings you want to add to the message board");

for(var i = 0; i < loopNum; i++)
{
    arrHolder.push(prompt("Enter the greeting that you want to add")); 
    arrHolderOutput.push(arrHolder[i+1]);
}

console.log("\t\t\t\t Greeting Board ! for everyone to see");
console.log(arrHolder);

alert(`Messages: [${arrHolderOutput}] are added to the message board`);




