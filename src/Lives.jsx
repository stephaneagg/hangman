

export default function Lives(props) {

    // the number of letters in guessed that are not in word
    const wrongGuessCount = props.guessed.filter(
        letter => !props.word.includes(letter)
    ).length

    return (
        <div className="lives">
            <img className="catnmouse" src="/resources/hangmouse.jpeg"></img>
            <p>{wrongGuessCount} incorrect guesses</p>
            <p>{wrongGuessCount >= 6 ? "oops you lost :)" : null}</p>
        </div>
    )
}