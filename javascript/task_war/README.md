# Exercise - War!

In this exercise you will write some of the code to model the card game [War](https://www.dicegamedepot.com/war-card-game-rules/). In any digital version of any game there are numerous parts working together: user interface, back-end, maybe even a database. In this exercise we will focus on the back end, writing the functions which will perform the core functions of the game.

We won't have a front-end for the user to interact with so we'll check everything works using unit tests - to complete the first stages of this exercise it won't be necessary to use `console.log` to print anything to the terminal. 

### General Tips

- Take your time, plan things out, don't be afraid to change your plan if something doesn't work out as expected
- Break the process of playing the game down into small steps and think about how they fit together. Do you need one big function for a player to take their turn, or could you split it into smaller functions which could be reused?
- Start small and build up to the full game - there's no point in trying to plan out the more complex rules if you can't deal a card yet..
- **Don't try to test the outcome of a random event!** It wouldn't be random if we could predict the outcome! 


## MVP (Minimum Viable Product)

Implement the basic "highest card wins" aspect of the game. Your code will need to satisfy the following criteria:

- At least three classes: `Game`, `Player` and `Card`
- Each class should have appropriate properties, eg. players should have a name, cards should have a value, etc
- There should be logic to build a deck, compare cards, determine a winner and anything else relevant for your implementation
- Diagrams for any classes made
- Tests for all properties and behaviours.

## Extensions

Add the "War!" phase of the game to handle situations when players play cards of the same value - you will likely need to refactor your code to handle this! Make sure you update your diagrams to reflect any changes and add tests for the new logic.

## Advanced Extensions

Add a `Runner` class which will let the user(s) play the game from the command line. To do this you will need to research how to get input from the user and how to process it within your application. **You should not need to restructure your existing code!** It should be possible to play the game by creating objects and calling their methods from within `Runner`.