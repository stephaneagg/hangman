

export default function Keyboard() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"


    function displayKeyboard() {
        return alphabet.split("")
            .map( (letter, index) => {
                return <button key={index }>
                        {letter.toUpperCase()}
                    </button>})
    }

    return (
        <div className="keyboard">
            {displayKeyboard()}
        </div>
    )
}