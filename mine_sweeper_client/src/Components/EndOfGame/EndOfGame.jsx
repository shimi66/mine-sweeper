import { useContext, useEffect, useState } from 'react'
import GameContext from '../../Context/GameContext.jsx'

function EndOfGame() {
    const { time, win, user_id, setAppState } = useContext(GameContext)
    const { high_scores, setHigh_Scores } = useState([])
    const [user_high_scores, setUser_High_Scores] = useState([])

    useEffect(() => {
        async function queryUserScores() {
            // this is currently fetching all scores
            const res = await fetch(`http://localhost:4000/scores?user_id=${encodeURIComponent(user_id)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            setUser_High_Scores(data)
        }
        queryUserScores()
    }, [])

    return (
        <>
            <div className="this-score">
                {win ? `You won with a score of ${time} seconds`
                    : `You blew up lol`}
            </div>
            <div className="play-again">
                <div>
                    Would you like to play again?
                </div>
                <button onClick={() => setAppState('in_settings')}>Play Again</button>
            </div>
            <div className="my-scores">
                <div>Your High Scores</div>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Difficulty</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user_high_scores?.filter((score) => score.user_id == user_id).map((score) => {
                            return (
                                <tr>
                                    <th>{score.user_id}</th>
                                    <th>{score.difficulty}</th>
                                    <th>{score.time}</th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="high-scores">

            </div>
        </>
    )
}

export default EndOfGame