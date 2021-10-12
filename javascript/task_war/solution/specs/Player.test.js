const Card = require('../src/Card');
const Player = require('../src/Player');

let player;
let card;

beforeEach(() => {
    player = new Player("Colin");
    card = new Card("Hearts", 7);
});

describe("new player", () => {

    test('should have a name', () => {
        expect(player.name).toBe("Colin");
    });
    
    test('should start with an empty hand', () => {
        expect(player.countCards()).toBe(0);
    });
    
});

describe("playing cards", () => {

    test('should be able to add card to hand', () => {
        player.addCardToHand(card);
        expect(player.countCards()).toBe(1);
    });
    
    test('should reduce card count by one when playing card', () => {
        player.addCardToHand(card);
        player.playCard();
        expect(player.countCards()).toBe(0);
    });

    test('should return first card added when playing card', () => {
        const extraCard = new Card("Diamond", 5);
        player.addCardToHand(card);
        player.addCardToHand(extraCard);
        const playedCard = player.playCard();
        expect(playedCard).toBe(card);
    });

    test('should play 4-card war deck if enough cards', () => {
        const extraCard1 = new Card("Diamond", 5);
        const extraCard2 = new Card("Spades", 6);
        const extraCard3 = new Card("Clubs", 13);
        const extraCard4 = new Card("Clubs", 10);
        player.addCardToHand(card);
        player.addCardToHand(extraCard1);
        player.addCardToHand(extraCard2);
        player.addCardToHand(extraCard3);
        player.addCardToHand(extraCard4);
        const warDeck = player.dealWarDeck();
        expect(warDeck.length).toBe(4);
    });

    test('should play smaller war deck if not enough cards', () => {
        player.addCardToHand(card);
        const warDeck = player.dealWarDeck();
        expect(warDeck.length).toBe(1);
    });

    test('should be able to add multiple cards at once', () => {
        const extraCard1 = new Card("Diamond", 5);
        const extraCard2 = new Card("Spades", 6);
        const extraCard3 = new Card("Clubs", 13);
        const extraCard4 = new Card("Clubs", 10);
        const cards = [extraCard1, extraCard2, extraCard3, extraCard4];
        player.addMultipleCardsToHand(cards);
        expect(player.countCards()).toBe(4);
        expect(cards.length).toBe(0);
    })
    
    
});