
var fNameLegit = "Carl";
var lNameLegit = "Millanes";
var fullNameLegit = fNameLegit + " " + lNameLegit;

var responseF = prompt("What is my first name?","Adonis");

if(responseF !== null) {
    alert("Are you sure about this?");
    var responseL = prompt("What is my last name then?","Torreon");
    if(responseL !== null) {
        alert("Okay I hope that it equates to my whole name then.");
        var fullName = responseF + " " + responseL;
        if(fullName === fullNameLegit) {
            alert("You got it right!, my name is " + fullNameLegit + ".");
        }else{
            alert("You got it wrong! Idiot! My name is not " + fullName + ", not even close. Do you even know me?");
        }
    }else{
        alert("Tf! I have a family idiot I have a last name.");
    }
}else{
    alert("My first name is not empty! tf are you saying.");
}