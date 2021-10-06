const { sum } = require("./calculator");

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
