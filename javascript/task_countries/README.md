# Exercise - Async Countries

When accessing information from an external source using JavaScript Promises are an invaluable tool. Using them means we can pause our program while the data loads, or handle a scenario where we can't retrieve anything.

Higher-order functions have a part to play as well, enabling us to act on the data as it loads. We can also use them to manipulate and analyse it.

In this exercise you will use `fetch` to load data from [an API with some stats about the countries of the world](https://restcountries.com/v3.1/all). Once the data is loaded complete the folowing tasks/answer the questions using some of the [JavaScript Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array):

1. Produce an array of the official names of all the countries
2. Find all of the landlocked countries
3. Is every country a member of the UN?
4. How many countries use the Euro (EUR) as a currency?
5. Are there any countries which are not independent?
6. Calculate the total population of the world
7. Starting with an empty String, iterate over the countries and add their flag emojis to make a big colourful banner
8. Find Germany, then find how many countries it borders.
9. Now find how many countries it borders **without looking for Germany**.
10. Build an array of all the different currencies used in the world

### Tips

- `npm init -y`
- `npm install node-fetch`
- Remember to add `"type": "module"` to the `package.json` file
- You may need to check the JavaScript Object documentation for some questions
- Each of these could be solved using a `forEach` statment or even a for loop. If you can't find an appropriate array method, try using either of these.