


export default function Word(props) {


    // turn the word into an array of letters

    function displayLetters() {
        let letterArr = props.word.split("")
        return letterArr.map( (letter, index) =>  {
            return <span 
                key={index} 
                className="letter">
                    {letter.toUpperCase()}
               </span>} )
    }


    return (
        <div className="word">
            {displayLetters()}
        </div>
    )
}