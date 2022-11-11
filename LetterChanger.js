let myStr = prompt("Type any word, may it be name,quote,ideas,verb,adjective");
let word1 = prompt("What letter do you want to change within the string?");
let word2 = prompt("What letter do you wish it to be changed with?");
let myStrFinal = "";
let myStrArr = [myStr.length]
for(var i = 0; i < myStr.length; i++)
{
    myStrArr[i] = myStr[i];

    if(myStrArr[i].toLowerCase() == word1.toLowerCase())
    {
        myStrArr[i] = word2;
    }
    myStrFinal += myStrArr[i];

    if(i == myStr.length - 1)
    {
        console.log(myStrFinal);
    }
}

