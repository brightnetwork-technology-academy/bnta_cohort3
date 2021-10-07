const Laptop = require('../laptop')

let macbook;

beforeEach(() => {
    macbook = new Laptop('Apple', 'Macbook Pro', 'Big Sur');
})

test('it should have a manufacturer', () => {
    expect(macbook.manufacturer).toBe("Apple");
})
