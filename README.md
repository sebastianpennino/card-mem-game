Memory Game - Exercise
======================

This project is an experiment/exercise for myself using a TDD approach on a semi complex problem.

## Project premise

###Functional Requirements

- Create a deck of 30 cards with 15 pairs of matching items (cards can be whatever you'd like such a letter, number, word, etc)
- Arrange the cards in a grid randomly with their faces hidden from the player ("face down")
- The user will click a card to reveal ("flip") it
- The user will click to reveal a second card.  If it matches the first card, they are removed and the player scores.  If it does not match, then the cards are both "flipped" back over.
- Once all cards have been matched, allow the user to start a new game.

###Self Imposed Dev Requirements

- Don't use any MVC framework but try to respect the MVC principle (if possible)
- Use a TDD approach (do the test fail, do the code, correct and repeat)
- Try to use plain javascript (not dependand on jQuery / underscore)
- Use common patterns and best practices
- If you have the time use JSDocs style comments


## Installation and Run

1. Clone the git repo
2. Download XAMPP for windows, copy the cloned repo to the htdocs folder using "memGame" as folder name
3. Run the XAMPP server with your preferred settings
4. In your preferred browser bar just type: http://localhost/memGame/


## Running the unit test

After installation simply go to the http://localhost/memGame/ and use the link in the top right corner (go to tests)
