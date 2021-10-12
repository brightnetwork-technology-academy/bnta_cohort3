const Card = require("./Card");

const Game = function(){
    this.players = [];
    this.deck = [];
}

Game.prototype.addPlayer = function(player){
    if (this.players.length < 2) {
        this.players.push(player);
    }
}

Game.prototype.countCards = function(){
    return this.deck.length
}

Game.prototype.addCardToDeck = function(card){
    this.deck.push(card);
}

Game.prototype.buildDeck = function(){
    const suits = ["Hearts", "Spades", "Diamonds", "Clubs"]

    for (let value = 2; value <= 14; value++) {
        for (const suit of suits) {
            const card = new Card(suit, value);
            this.addCardToDeck(card)
        }
    }
}

Game.prototype.deal = function(){
    while (this.countCards() > 0) {
        // Remove first card from deck
        const card = this.deck.shift();
        // Check if we have an odd number of cards left. If we do nextPlayerIndex is 1 and we deal to player2, otherwise it is 0 and we deal to player1
        const nextPlayerIndex = this.countCards() % 2;
        this.players[nextPlayerIndex].addCardToHand(card);
    }
}

Game.prototype.findWinningCard = function(card1, card2){
    if (card1.value > card2.value) {
        return card1;
    } else if(card1.value < card2.value) {
        return card2;
    } else {
        return null;
    }
}

Game.prototype.playTurn = function(){
    const player1Card = this.players[0].playCard();
    const player2Card = this.players[1].playCard();
    const winner = this.findWinningCard(player1Card, player2Card);

    if (winner === player1Card){
        this.players[0].addCardToHand(player1Card);
        this.players[0].addCardToHand(player2Card);
    } 
    if (winner === player2Card) {
        this.players[1].addCardToHand(player1Card);
        this.players[1].addCardToHand(player2Card);
    }
    if (!winner) {
        this.war([player1Card, player2Card]);
    }
}

Game.prototype.getWinner = function(){
    return this.players[0].countCards() === 0 ? this.players[1] : this.players[0];
}

Game.prototype.war = function(tableCards){
    const player1Deck = this.players[0].dealWarDeck();
    const player2Deck = this.players[1].dealWarDeck();
    const cardPool = [...tableCards, ...player1Deck, ...player2Deck];

    if (player1Deck.length < 4) {
        this.players[1].addMultipleCardsToHand(cardPool);
        return
    }
    if (player2Deck.length < 4) {
        this.players[0].addMultipleCardsToHand(cardPool);
        return
    }

    const warCard1 = player1Deck.shift();
    const warCard2 = player2Deck.shift();

    const warWinner = this.findWinningCard(warCard1, warCard2);

    if (!warWinner) {
        this.war(cardPool);
    }
    if (warWinner === warCard1) {
        this.players[0].addMultipleCardsToHand(cardPool);
    }
    if (warWinner === warCard2) {
        this.players[1].addMultipleCardsToHand(cardPool);
    }
}

module.exports = Game;