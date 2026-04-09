
import Status from "./Status.jsx"
import Lives from "./Lives.jsx"
import Word from "./Word.jsx"
import Keyboard from "./Keyboard.jsx"
import { useState } from "react"
export default function App() {


  const [word, setWord] = useState("react")
  const [guessed, setGuessed] = useState([])


  function guessLetter(letter) {
    setGuessed( (prev) => 
      prev.includes(letter) ?
      prev : 
      [...prev, letter]
    )
  }

  return (
    <main>
      <header>
        <h1>HangMouse</h1>
        <p>Guess the word in under 6 attempts to win</p>
      </header>


        <Status />
        <Lives />
        <Word word={word} guessed={guessed}/>
        <Keyboard word={word} guessed={guessed} guessLetter={guessLetter}/>
        <button className="game-button">New Game</button>
    </main>
  )
}