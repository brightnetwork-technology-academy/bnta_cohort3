const Player = function(name){
    this.name = name;
    this.hand = [];
}

Player.prototype.countCards = function(){
    return this.hand.length;
}

Player.prototype.addCardToHand = function(card){
    this.hand.push(card);
}

Player.prototype.playCard = function(card){
    return this.hand.shift();
}

Player.prototype.dealWarDeck = function(){
    return this.hand.splice(0, 4);
}

Player.prototype.addMultipleCardsToHand = function(cards){
    while (cards.length > 0) {
        const card = cards.pop();
        this.addCardToHand(card);
    }
}

module.exports = Player;