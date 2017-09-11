console.log("up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


var flipcard = function(cardId){
  var cardOne = cards[0];
  var cardTwo = cards [1];

  cardsInPlay.push(cardOne);
  cardsInPlay.push(cardTwo);

  if (cardsInPlay.length === 2) {
    if (cardOne === cardTwo){
      alert("You found a match!");
    }
    else
    alert ("sorry, try again.");
  };

  console.log("User flipped" + cards[cardId]);

};


//var checkForMatch = function (){
  //if (cardsInPlay.length = 2) {
  //console.log("You found a match!");
  //} else {
  //console.log("Sorry, try again.");
  //}
//};

//var flipCard = function(cardId){
  //checkForMatch;

  //var cardOne = cards[0];
  //var cardTwo = cards [1];


  //cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);
