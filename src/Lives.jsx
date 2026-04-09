

export default function Lives(props) {

    return (
        <div className="lives">
            <img className="catnmouse" src="/resources/hangmouse.jpeg"></img>
            <p>{props.wrongGuessCount} incorrect guesses</p>
            <p>{props.wrongGuessCount >= 6 ? "oops you lost :)" : null}</p>
        </div>
    )
}