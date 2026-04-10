
import { clsx } from "clsx"

export default function Status(props) {

    const gameStatusClass = clsx("game-status" , {
        won: props.isGameWon,
        lost: props.isGameLost
    })

    function renderStatus() {
        if (!props.isGameOver) {
            return null
        }
        if (props.isGameWon) {
            return (
                    <>
                        <h2>You Win!</h2>
                        <h2>Well done!</h2>
                    </>)
        } else {
            return (
                <>
                    <h2>You Lose!</h2>
                    <h2>Try Again!</h2>
                </>
            )
        }
    }

    return (
        <div className={gameStatusClass}>
            {renderStatus()}
        </div>
    )
}