const Card = require('../src/Card');

let card;

beforeEach(() => {
    card = new Card("Hearts", 7);
});

describe("Card", () => {

    test('should have a suit', () => {
        expect(card.suit).toBe("Hearts");
    });
    
    test('should have a value', () => {
        expect(card.value).toBe(7);
    });

});