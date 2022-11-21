var fNames = ["Carl", "Irven", "Nykuluz"];
fNames[0] = fNames[0].toLowerCase();
fNames[1] = fNames[1].toLowerCase();
fNames[2] = fNames[2].toLowerCase();

alert("Hello!, My First Name is Carl Irven Nykuluz, I know it is quite long but bear with it.");

var guess = prompt("Type one of my first names");
if (guess.toLowerCase() === fNames[0] || guess.toLowerCase() === fNames[1] || guess.toLowerCase() === fNames[2]) {

    alert("You guessed it Correctly! " + guess + " is part of my first name");
}
else {
    alert("You guessed it Incorrectly! " + guess + " is not part of my first name");
}

