console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards [1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log ("User flipped " + cardTwo);

if (cardsInPlay.length === 2){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};

//var cards = ["queen", "queen", "king", "king"];
//var cardsInPlay= [];

//var checkForMatch = function(){
//if (cardsInPlay[0] === cardsInPlay[1]) {
//console.log("You found a match!");
//} else {
//console.log("Sorry, try again.");
//}
//};

//var flipCard = function(cardId){
  //var cardOne = cards[0];
  //var cardTwo = cards [3];

  //cardsInPlay.push(cardOne);
  //cardsInPlay.push(cardTwo);

  //if (cardsInPlay.length === 2){
    //if (cardsInPlay[0] === cardsInPlay[1]){
      //alert ("You found a match!");
    //}
    //else {
      //alert ("Sorry, try again.");
  //}
  //console.log("User flipped " + cards[cardId]);
  //cardsInPlay.push(cards[cardId]);
//}
//};

//flipCard(0);
//flipCard(2);

//var cards = ["queen", "queen", "king", "king"];
//var cardsInPlay = [];

//var checkForMatch = function(){
  //if (cardsInPlay[0] === cardsInPlay[1]) {
    //  alert ("You found a match!");
    //}
    //else
      //alert ("sorry, try again.");
//  };

//var flipCard = function(cardId){
  //checkForMatch();
  //var cardOne = cards[0];
  //var cardTwo = cards [1];

  //cardsInPlay.push(cardOne);
  //cardsInPlay.push(cardTwo);
  //cardsInPlay.push(cards[cardId]);
  //cardsInPlay.push(cards[cardId]);
  //console.log("User flipped " + cards[cardId]);
//};

//flipCard(0);
//flipCard(2);
