console.log("Up and running!");


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0]
cardsInPlay.push (cardOne);
//cardsInPlay;
console.log("user flipped queen");
var cardTwo = cards[2];
cardsInPlay.push (cardTwo);
//cardsInPlay;
console.log("user flipped king");


// can I just leave this?  Do I need a path for if there are not 2 cards in play?
if (cardsInPlay.lenth === 2) {
}
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You Found a Match!")
} else {
	alert("Try Again!")
}