
import { clsx } from "clsx"

export default function Word(props) {

    // turn the word into an array of letters
    function displayLetters() {
        let letterArr = props.word.split("")
        return letterArr.map( (letter, index) =>  {

            const isGuessed = props.guessed.includes(letter)
            const isCorrect = props.guessed.includes(letter) && props.word.split("").includes(letter)
            const shouldRevealLetter = props.isGameOver || (isGuessed && isCorrect)
            const letterClass = clsx(
                props.isGameOver && !isGuessed && "missed-letter"
            )

            return <span 
                key={index} 
                className={letterClass}>
                    {shouldRevealLetter ? letter.toUpperCase() : ""}
               </span>} )
    }


    return (
        <div className="word">
            {displayLetters()}
        </div>
    )
}