const Card = require('../src/Card');
const Game = require('../src/Game');
const Player = require('../src/Player');

let game;
let player1;
let player2;

beforeEach(() => {
    game = new Game();
    player1 = new Player("Colin");
    player2 = new Player("Valeria");
});


describe("new game", () => {

    test('should start with no players', () => {
        expect(game.players.length).toBe(0);
    });

    test('should start with an empty deck', () => {
        expect(game.countCards()).toBe(0);
    });

});


describe("game setup", () => {

    test('should be able to add a player', () => {
        game.addPlayer(player1);
        expect(game.players.length).toBe(1);
    });

    test('should only be able to add 2 players', () => {
        const extraPlayer = new Player("Ben");
        game.addPlayer(player1);
        game.addPlayer(player2);
        game.addPlayer(extraPlayer);
        expect(game.players.length).toBe(2);
    });

    test('should be able to add a card to the deck', () => {
        const card = new Card("Hearts", 7);
        game.addCardToDeck(card);
        expect(game.countCards()).toBe(1);
    });
    
    test('should be able to build 52 card deck', () => {
        game.buildDeck();
        expect(game.countCards()).toBe(52);
    });
    
    test('should be able to deal 26 cards to each player', () => {
        game.buildDeck();
        game.addPlayer(player1);
        game.addPlayer(player2);
        game.deal();
        expect(player1.countCards()).toBe(26);
        expect(player2.countCards()).toBe(26);
    });

});


describe("comparing cards", () => {

    test('should be able to find winning card -- highest card first', () => {
        const highCard = new Card("Clubs", 12);
        const lowCard = new Card("Diamonds", 2);
        const winner = game.findWinningCard(highCard, lowCard);
        expect(winner).toBe(highCard);
    });

    test('should be able to find winning card -- highest card second', () => {
        const highCard = new Card("Clubs", 12);
        const lowCard = new Card("Diamonds", 2);
        const winner = game.findWinningCard(lowCard, highCard);
        expect(winner).toBe(highCard);
    });

    test('should be able to find winning card -- null if tied', () => {
        const card1 = new Card("Hearts", 7);
        const card2 = new Card("Spades", 7);
        const winner = game.findWinningCard(card1, card2);
        expect(winner).toBeNull();
    });

});


describe("playing a turn", () => {

    test('should add cards to winning player hand -- player1 wins', () => {
        const highCard = new Card("Clubs", 12);
        const lowCard = new Card("Diamonds", 2);
        player1.addCardToHand(highCard);
        game.addPlayer(player1);
        player2.addCardToHand(lowCard);
        game.addPlayer(player2);
        game.playTurn();
        expect(player1.countCards()).toBe(2);
        expect(player2.countCards()).toBe(0);
    });

    test('should add cards to winning player hand -- player2 wins', () => {
        const highCard = new Card("Clubs", 12);
        const lowCard = new Card("Diamonds", 2);
        player1.addCardToHand(lowCard);
        game.addPlayer(player1);
        player2.addCardToHand(highCard);
        game.addPlayer(player2);
        game.playTurn();
        expect(player1.countCards()).toBe(0);
        expect(player2.countCards()).toBe(2);
    });

    test('should be able to check winner -- player1 wins', () => {
        const highCard = new Card("Clubs", 12);
        const lowCard = new Card("Diamonds", 2);
        player1.addCardToHand(highCard);
        game.addPlayer(player1);
        player2.addCardToHand(lowCard);
        game.addPlayer(player2);
        game.playTurn();
        const winner = game.getWinner();
        expect(winner).toBe(player1);
    });

    test('should be able to check winner -- player2 wins', () => {
        const highCard = new Card("Clubs", 12);
        const lowCard = new Card("Diamonds", 2);
        player1.addCardToHand(lowCard);
        game.addPlayer(player1);
        player2.addCardToHand(highCard);
        game.addPlayer(player2);
        game.playTurn();
        const winner = game.getWinner();
        expect(winner).toBe(player2);
    });

});


describe("war function", () => {

    test('should give all cards to player2 if player1 short', () => {
        const tableCard1 = new Card("Hearts", 7);
        const tableCard2 = new Card("Clubs", 7);
        const tableCards = [tableCard1, tableCard2];

        const lowCard1 = new Card("Diamonds", 2);
        player1.addCardToHand(lowCard1);

        const highCard1 = new Card("Diamonds", 14);
        const highCard2 = new Card("Spades", 14);
        const highCard3 = new Card("Hearts", 14);
        const highCard4 = new Card("Clubs", 14);
        player2.addCardToHand(highCard1);
        player2.addCardToHand(highCard2);
        player2.addCardToHand(highCard3);
        player2.addCardToHand(highCard4);

        game.addPlayer(player1);
        game.addPlayer(player2);
        game.war(tableCards);
        
        expect(player1.countCards()).toBe(0);
        expect(player2.countCards()).toBe(7);
    });

    test('should give all cards to player1 if player2 short', () => {
        const tableCard1 = new Card("Hearts", 7);
        const tableCard2 = new Card("Clubs", 7);
        const tableCards = [tableCard1, tableCard2];

        const lowCard1 = new Card("Diamonds", 2);
        player2.addCardToHand(lowCard1);

        const highCard1 = new Card("Diamonds", 14);
        const highCard2 = new Card("Spades", 14);
        const highCard3 = new Card("Hearts", 14);
        const highCard4 = new Card("Clubs", 14);
        player1.addCardToHand(highCard1);
        player1.addCardToHand(highCard2);
        player1.addCardToHand(highCard3);
        player1.addCardToHand(highCard4);

        game.addPlayer(player1);
        game.addPlayer(player2);
        game.war(tableCards);

        expect(player1.countCards()).toBe(7);
        expect(player2.countCards()).toBe(0);
    });

    test('should give all cards to player1 if player1 wins', () => {
        const tableCard1 = new Card("Hearts", 7);
        const tableCard2 = new Card("Clubs", 7);
        const tableCards = [tableCard1, tableCard2];

        const highCard1 = new Card("Diamonds", 14);
        const highCard2 = new Card("Spades", 14);
        const highCard3 = new Card("Hearts", 14);
        const highCard4 = new Card("Clubs", 14);
        player1.addCardToHand(highCard1);
        player1.addCardToHand(highCard2);
        player1.addCardToHand(highCard3);
        player1.addCardToHand(highCard4);

        const lowCard1 = new Card("Diamonds", 2);
        const lowCard2 = new Card("Spades", 2);
        const lowCard3 = new Card("Hearts", 2);
        const lowCard4 = new Card("Clubs", 2);
        player2.addCardToHand(lowCard1);
        player2.addCardToHand(lowCard2);
        player2.addCardToHand(lowCard3);
        player2.addCardToHand(lowCard4);

        game.addPlayer(player1);
        game.addPlayer(player2);
        game.war(tableCards);

        expect(player1.countCards()).toBe(10);
        expect(player2.countCards()).toBe(0);
    });

    test('should give all cards to player2 if player2 wins', () => {
        const tableCard1 = new Card("Hearts", 7);
        const tableCard2 = new Card("Clubs", 7);
        const tableCards = [tableCard1, tableCard2];

        const highCard1 = new Card("Diamonds", 14);
        const highCard2 = new Card("Spades", 14);
        const highCard3 = new Card("Hearts", 14);
        const highCard4 = new Card("Clubs", 14);
        player2.addCardToHand(highCard1);
        player2.addCardToHand(highCard2);
        player2.addCardToHand(highCard3);
        player2.addCardToHand(highCard4);

        const lowCard1 = new Card("Diamonds", 2);
        const lowCard2 = new Card("Spades", 2);
        const lowCard3 = new Card("Hearts", 2);
        const lowCard4 = new Card("Clubs", 2);
        player1.addCardToHand(lowCard1);
        player1.addCardToHand(lowCard2);
        player1.addCardToHand(lowCard3);
        player1.addCardToHand(lowCard4);

        game.addPlayer(player1);
        game.addPlayer(player2);
        game.war(tableCards);

        expect(player1.countCards()).toBe(0);
        expect(player2.countCards()).toBe(10);
    });

    test('should start another war if still tied', () => {
        const tableCard1 = new Card("Hearts", 7);
        const tableCard2 = new Card("Clubs", 7);
        const tableCards = [tableCard1, tableCard2];

        const tieCard1 = new Card("Hearts", 6);
        const highCard1 = new Card("Diamonds", 14);
        const highCard2 = new Card("Spades", 14);
        const highCard3 = new Card("Hearts", 14);
        const highCard4 = new Card("Clubs", 14);
        player2.addCardToHand(tieCard1);
        player2.addCardToHand(highCard1);
        player2.addCardToHand(highCard2);
        player2.addCardToHand(highCard3);
        player2.addCardToHand(highCard4);

        const tieCard2 = new Card("Clubs", 6);
        const lowCard1 = new Card("Diamonds", 2);
        const lowCard2 = new Card("Spades", 2);
        const lowCard3 = new Card("Hearts", 2);
        const lowCard4 = new Card("Clubs", 2);
        const extraCard1 = new Card("Diamonds", 3);
        const extraCard2 = new Card("Spades", 3);
        const extraCard3 = new Card("Hearts", 3);
        const extraCard4 = new Card("Clubs", 3);
        player1.addCardToHand(tieCard2);
        player1.addCardToHand(lowCard1);
        player1.addCardToHand(lowCard2);
        player1.addCardToHand(lowCard3);
        player1.addCardToHand(lowCard4);
        player1.addCardToHand(extraCard1);
        player1.addCardToHand(extraCard2);
        player1.addCardToHand(extraCard3);
        player1.addCardToHand(extraCard4);

        game.addPlayer(player1);
        game.addPlayer(player2);
        game.war(tableCards);

        expect(player1.countCards()).toBe(16);
        expect(player2.countCards()).toBe(0);
    });
    
    test('should be called by playTurn when tied', () => {
        const player1Card1 = new Card("Hearts", 7);
        const player1Card2 = new Card("Hearts", 8);
        const player1Card3 = new Card("Hearts", 9);
        const player1Card4 = new Card("Hearts", 10);
        const player1Card5 = new Card("Hearts", 11);
        player1.addCardToHand(player1Card1);
        player1.addCardToHand(player1Card2);
        player1.addCardToHand(player1Card3);
        player1.addCardToHand(player1Card4);
        player1.addCardToHand(player1Card5);

        const player2Card1 = new Card("Clubs", 7);
        const player2Card2 = new Card("Clubs", 6);
        const player2Card3 = new Card("Clubs", 5);
        player2.addCardToHand(player2Card1);
        player2.addCardToHand(player2Card2);
        player2.addCardToHand(player2Card3);

        game.addPlayer(player1);
        game.addPlayer(player2);

        game.playTurn();
        
        expect(player1.countCards()).toBe(8);
        expect(player2.countCards()).toBe(0);
    });
    

});