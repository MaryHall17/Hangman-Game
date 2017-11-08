//Rock legends arrary. This array holds the words for the game.
var rockLegendsArray=["stevie nicks", "aerosmith", "fats domino", "elvis", "tom petty", "eagles"];
//Word randomizer and display function. The randomizer selects which word from the array.
//When the site loads...
function randomizeWord () {
	// We generate a random number from the array.
	var number = Math.floor((Math.random() * rockLegendsArray.length));
	console.log(rockLegendsArray[number]);
	// Variants and functions called for use later in the display as blanks function.
	var word = rockLegendsArray[number];
	wordBlank (word);	
};

//We display the names from the array as blanks by passing the names to the paramter word.
function wordBlank (word) {
	var transformWord = word;
	for (i = 0; i < word.length; i++) {
		transformWord = transformWord.replace(transformWord.charAt(i), "_");
		//connection to event's local scope	
		// var letter = word.charAt(i);
		// guessFunction (letter);
		// console.log(word.replace(word.charAt(i),"_"))
		// console.log(transformWord) //grab what we have done and get it to interact with rest of page "scoping issue"
// 	var str = "Visit Microsoft!";
// 	var res = str.replace("Microsoft", "W3Schools");
// 	var str = "HELLO WORLD";
// 	var res = str.charAt(0); //utilize for loop to make conditional statements for blank
	} 
	document.getElementById("word").innerHTML= transformWord;
}


//onKeyEvent. If the user selects the correct key, the character will replace the blank.
//If the user guesses incorrectly, the guesses left will tick down. 
function guessFunction(letter) {
 	var key = letter
 	var key = String.fromCharCode(event.keyCode).toLowerCase(letter);
 	for (i = 0; i < word.length; i++) {
 		if (key == word.charAt(i)) {
 		document.getElementById("word").innerHTML = key;
 		} else if (key !== word.charAt(i)) {
 		document.getElementById("guessesLeft").innerHTML = guessesLeft--;
 		}
 	}
 };
 // function guessLetter (letter) {
 // 	var letter = String.fromCharCode(event.keyCode).toLowerCase();
 // 	for (i = 0; i < word.length; i++) {
 // 		if (letter = word.charAt(i)) {
 // 			document.getElementById("word").innerHTML = letter;
 // 		}
 // 	}
 // }
// if (rockLegendsArray[0]) {
// document.onkeyup = function(event) {
// 	var letter = String.fromCharCode(event.keyCode).toLowerCase();
// 	if (letter = "s")c
// 		document.getElementById("word").innerHTML =("s _ _ _ _ _" + " " "_ _ _ _ s");
//  } else	if (letter = "t") {
//  		document.getElementById("word").innerHTML =("_ t _ _ _ _" + " " "_ _ _ _ _");
//  }	else if (letter = "e") {
//  		document.getElementById("word").innerHTML =("_ _ e _ _ e" + " " "_ _ _ _ _");
//  } else if (letter = "v") {
//  		document.getElementById("word").innerHTML =("_ _ _ v _ _" + " " "_ _ _ _ _");
//  } else if (letter = "i") {
//  		document.getElementById("word").innerHTML =("_ _ _ _ i _" + " " "_ i _ _ _");
//  } else if (letter = "n") {
//  		document.getElementById("word").innerHTML =("_ _ _ _ _ _" + " " "n _ _ _ _");
//  } else if (letter = "c") {
//  		document.getElementById("word").innerHTML= ("_ _ _ _ _ _" + " " "_ _ c _ _");
//  } else if (letter = "k") {
//  		document.getElementById("word").innerHTML= ("_ _ _ _ _ _" + " " "_ _ _ k _");
//  } else {
//  	document.getElementById("guessesLeft").innerHTML=("guessesLeft"--);
//  };
// };
// };

//Aerosmith [1]
// if (rockLegendsArray[1]) {
// 	document.onkeyup = function(event) {
// 		var letter= String.fromCharCode(event.keyCode).toLowerCase();
// 		if (letter= "a")
// 			document.getElementById("word").innerHTML =("a _ _ _ _ _ _ _ _");
// 	} else if (letter= "e") {
// 			document.getElementById("word").innerHTML =("_ e _ _ _ _ _ _ _");
// 	} else if (letter= "r") {
// 			document.getElementById("word").innerHTML =("_ _ r _ _ _ _ _ _");
// 	} else if (letter= "o") {
// 			document.getElementById("word").innerHTML =("_ _ _ o _ _ _ _ _");
// 	} else if (letter= "s") {
// 			document.getElementById("word").innerHTML =("_ _ _ _ s _ _ _ _");
// 	} else if (letter= "m") {
// 			document.getElementById("word").innerHTML= ("_ _ _ _ _ m _ _ _");
// 	} else if (letter= "i") {
// 			document.getElementById("word").innerHTML= ("_ _ _ _ _ _ i _ _");
// 	} else if (letter= "t") {
// 			document.getElementById("word").innerHTML= ("_ _ _ _ _ _ _ t _");
// 	} else if (letter= "h") {
// 			docuemtn.getElementById("word").innerHTML= ("_ _ _ _ _ _ _ _ h");
// 	} else {
// 		document.getElementById("guessesLeft").innerHTML= ("guessesLeft"--);
// 	};
// };
// };

// //Fats Domino [2]
// if (rockLegendsArray[2]) {
// 	document.onkeyup = function(event) {
// 	var letter=String.fromCharCode(event.keyCode).toLowerCase();
// 	if (letter="f") {
// 			document.getElementById("word").innerHTML =("f _ _ _" + " " + "_ _ _ _ _ _");
// 	} else if (letter="a") {
// 			document.getElementById("word").innerHTML =("_ a _ _" + " " + "_ _ _ _ _ _");
// 	} else if (letter="t") {
// 			document.getElementById("word").innerHTML =("_ _ t _" + " " + "_ _ _ _ _ _");
// 	} else if (letter="s") {
// 			document.getElementById("word").innerHTML =("_ _ _ s" + " " + "_ _ _ _ _ _");
// 	} else if (letter="d") {
// 			document.getElementById("word").innerHTML =("_ _ _ _" + " " + "d _ _ _ _ _");
// 	} else if (letter="o") {
// 			document.getElementById("word").innerHTML =("_ _ _ _" + " " + "_ o _ _ _ o");
// 	} else if (letter="m") {
// 			document.getElementById("word").innerHTML =("_ _ _ _" + " " + "_ _ m _ _ _");
// 	} else if (letter="i") {
// 			document.getElementById("word").innerHTML =("_ _ _ _" + " " + "_ _ _ i _ _");
// 	} else if (letter="n") {
// 			document.getElementById("word").innerHTML =("_ _ _ _" + " " + "_ _ _ _ n _");
// 	} else {
// 			document.getElementById("guessesLeft").innerHTML= ("guessesLeft"--);
// 	};
// };
// };

// if (rockLegendsArray[3])
// //Outcome. If the users wins, the wins tally increases; loses the loss tally increases.

