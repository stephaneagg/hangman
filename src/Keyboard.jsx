import { clsx } from "clsx"

export default function Keyboard(props) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function displayKeyboard() {
        return alphabet.split("")
            .map( (letter, index) => {
                const isGuessed = props.guessed.includes(letter)
                const isCorrect = props.guessed.includes(letter) && props.word.split("").includes(letter)
                const isWrong = props.guessed.includes(letter) && !props.word.split("").includes(letter)

                const className = clsx({
                    correct: isCorrect,
                    wrong: isWrong
                })

                return <button className={className} 
                            key={index} 
                            onClick={ () => { !props.isGameOver ? props.guessLetter(letter) : null}}>
                                {letter.toUpperCase()}
                        </button>})
    }

    return (
        <div className="keyboard">
            {displayKeyboard()}
        </div>
    )
}