let myStr = prompt("Type any word/sentence, may it be name,quote,ideas,verb,adjective");
let trimLength = prompt("How long do you want to trim the length of the word/sentence?");
let myStrArr = []
let length = myStr.length - trimLength;
for(let i = 0; i < length; i++)
{
    myStrArr += myStr[i]
}
console.log(myStrArr)