
import Status from "./Status.jsx"
import Lives from "./Lives.jsx"
import Word from "./Word.jsx"
import Keyboard from "./Keyboard.jsx"
import { useState } from "react"
import { words } from "../resources/words.js"
export default function App() {


  const [word, setWord] = useState(getWord())
  const [guessed, setGuessed] = useState([])


  // the number of letters in guessed that are not in word
  const wrongGuessCount = guessed.filter(
      letter => !word.includes(letter)
  ).length

  const isGameWon = word.split("").every( (letter) => guessed.includes(letter))
  const isGameLost = wrongGuessCount >= 6
  const isGameOver = isGameWon || isGameLost

  function guessLetter(letter) {
    setGuessed( (prev) => 
      prev.includes(letter) ?
      prev : 
      [...prev, letter]
    )
  }

  function getWord() {
    const rand = Math.floor(Math.random() * (words.length-1))
    return words[rand]
  }

  return (
    <main>
      <header>
        <h1>HangMouse</h1>
        <p>Guess the word in under 6 attempts to win</p>
      </header>


      <Status isGameWon={isGameWon} isGameLost={isGameLost} isGameOver={isGameOver}/>
      <Lives wrongGuessCount={wrongGuessCount}/>
      <Word word={word} guessed={guessed}/>
      <Keyboard word={word} guessed={guessed} guessLetter={guessLetter} isGameOver={isGameOver}/>
      {isGameOver ? <button className="game-button">New Game</button> : null }
    </main>
  )
}