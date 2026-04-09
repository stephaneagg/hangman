
import Status from "./Status.jsx"
import Lives from "./Lives.jsx"
import Word from "./Word.jsx"
import Keyboard from "./Keyboard.jsx"
import { useState } from "react"
export default function App() {


  const [word, setWord] = useState("react")
  const [guessed, setGuessed] = useState([])

/**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: Create a new array in state to hold user's
 * guessed letters. When the user chooses a letter, add
 * that letter to this state array.
 * 
 * Don't worry about whether it was a right or wrong 
 * guess yet.
 */



  function guessLetter(letter) {
    setGuessed( (prev) => 
      prev.includes(letter) ?
      prev : 
      [...prev, letter]
    )
  }

  console.log(guessed)

  return (
    <main>
      <header>
        <h1>HangMouse</h1>
        <p>Guess the word in under 6 attempts to win</p>
      </header>


        <Status />
        <Lives />
        <Word word={word}/>
        <Keyboard guessLetter={guessLetter}/>
        <button className="game-button">New Game</button>
    </main>
  )
}