const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

test("Sum 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("Sum 2 + 2", () => {
  expect(sum(2, 2)).toBe(4);
  expect(sum(2, 2)).toEqual(4);
  expect(sum(2, 2)).toBeGreaterThan(3);
  expect(sum(2, 2)).toBeGreaterThanOrEqual(3.5);
  expect(sum(2, 2)).toBeLessThan(5);
  expect(sum(2, 2)).toBeLessThanOrEqual(4.5);
});

const shoppingList = ["milk", "eggs", "petrol", "toilet roll", "bacon"];

const addItemToList = (list, item) => {
  list.push(item);
  return list;
};

const removeItemFromList = (list, item) => {
  const index = list.indexOf(item);
  list.splice(index, 1);
  return list;
};

test("shopping list", () => {
  expect(shoppingList).toContain("milk");
  expect(removeItemFromList(shoppingList, "milk")).not.toContain("milk");
  expect(addItemToList(shoppingList, "milk")).toContain("milk");
});
