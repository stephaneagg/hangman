# HangMouse, A hangman esque React game

A word guessing game similar to hangman. You are a mouse sneaking up on some cheese guarded by a sleeping cat. Correctly guess the word get the cheese. Make 6 incorrect guesses and the cat wakes up.


## Features
- Interactive on-screen keyboard for guessing letters
- Word reveal system based on correct guesses
- Tracking of incorrect guesses (lives system)
- Win/lose game states with visual feedback
- Duplicate guess prevention
- Dynamic styling using conditional class names (clsx)
- Component-based architecture (Status, Lives, Word, Keyboard)
- Simple and responsive UI layoutYou lose after 6 incorrect guesses

## Tech Stack
- React (Vite)
- JavaScript (ES6+)
- CSS
- npm packages:
    - Clsx (Conditionally assigning classNames)

## How to Play
1. A random word is selected at the start of the game
2. Use the on-screen keyboard to guess letters
    - Correct guesses reveal letters in the word
    - 6 Incorrect guesses are allowed until the cat wakes up and the game is lost
3. You win by guessing all letters before running out of attempts
4. Click New Game to restart after a win or loss

## Acknowledgements
- Inspired by common React learning projects
- Thanks to open-source libraries used in this project