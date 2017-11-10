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
		//connection to guessFunction's local scope	
		var letter = word.charAt(i);
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
// If the user guesses incorrectly, the guesses left will tick down. 
addEventListener("keypress", function guessFunction(letter) {
	var key = letter;
	var guessesLeft = document.getElementById("guessesLeft").innerHTML;
	var integer = parseInt(guessesLeft);
	for (i = 0; i < word.innerHTML.length; i++) {
		key = String.fromCharCode(letter.keyCode).toLowerCase();
		if (key == word.innerHTML.charAt(i)) {
			document.getElementById("word").innerHTML = key;
		} else if (key !== word.innerHTML.charAt(i)) {
			document.getElementById("lettersGuessed").innerHTML = key;
			// guessesLeft logic should be last
			document.getElementById("guessesLeft").innerHTML = integer--;
		}
	} 
	console.log(word.innerHTML);
});
// set letter
// valid letter?-yes, no (if else)
// have we already guessed?-yes, no (if else)
// is it a letter in our word?
	//function for correct letter
	//increment counter
 

 // function guessLetter (letter) {
 // 	var letter = String.fromCharCode(event.keyCode).toLowerCase();
 // 	for (i = 0; i < word.length; i++) {
 // 		if (letter = word.charAt(i)) {
 // 			document.getElementById("word").innerHTML = letter;
 // 		}
 // 	}
 // }

// //Outcome. If the users wins, the wins tally increases; loses the loss tally increases.

