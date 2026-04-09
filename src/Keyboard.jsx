

export default function Keyboard(props) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"


    function displayKeyboard() {
        return alphabet.split("")
            .map( (letter, index) => {
                return <button key={index} 
                            onClick={ () => {props.guessLetter(letter)}}>
                                {letter.toUpperCase()}
                        </button>})
    }

    return (
        <div className="keyboard">
            {displayKeyboard()}
        </div>
    )
}