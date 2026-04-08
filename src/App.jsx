
import Status from "./Status.jsx"
import Lives from "./Lives.jsx"
import Word from "./Word.jsx"
import { useState } from "react"
export default function App() {


  const [word, setWord] = useState("react")
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

/**
 * Goal: Build out the main parts of our app
 * 
 * Challenge: 
 * Display the keyboard ⌨️. Use <button>s for each letter
 * since it'll need to be clickable and tab-accessible.
 */


  return (
    <main>
      <header>
        <h1>HangMouse</h1>
        <p>Guess the word in under 6 attempts to win</p>
      </header>


        <Status />
        <Lives />
        <Word word={word}/>

    </main>
  )
}