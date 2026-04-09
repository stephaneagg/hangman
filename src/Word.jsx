


export default function Word(props) {


    // turn the word into an array of letters

    function displayLetters() {
        let letterArr = props.word.split("")
        return letterArr.map( (letter, index) =>  {
            const isGuessed = props.guessed.includes(letter)
            const isCorrect = props.guessed.includes(letter) && props.word.split("").includes(letter)
            return <span 
                key={index} 
                className="letter">
                    {isGuessed && isCorrect ? letter.toUpperCase() : ""}
               </span>} )
    }


    return (
        <div className="word">
            {displayLetters()}
        </div>
    )
}