console.log("Up and running!");

var cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function(){
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
  } else {
  console.log("Sorry, try again.");
  }
}
};

var flipCard = function(){
  var cardId = this.getAttribute('data-id');
  console.log("user flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  checkForMatch();
  };

var createBoard = function(){
 for (var i = 0; i < cards.length; i++){
   cards[i];
   var cardElement = document.createElement('img');
   cardElement.setAttribute('src', "images/back.png");
   cardElement.setAttribute('data-id', i);
   cardElement.addEventListener('click', flipCard);
   document.getElementById('game-board').appendChild(cardElement);
 }
};

createBoard();

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
