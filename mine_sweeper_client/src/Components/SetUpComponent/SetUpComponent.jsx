import { useContext } from 'react'
import GameContext from '../../Context/GameContext'
import './SetUpComponent.css'

function SetUpComponent() {
    const {user, setUser,
            setUser_Id,
        difficulty, setDifficulty,
        appState, setAppState} = useContext(GameContext)

    async function handleSaveSettings() {
        const res = await fetch(`http://localhost:4000/users?user_name=${encodeURIComponent(user)}`, {
                                    method: "GET",
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                })
        const data = await res.json()
        console.log('fetch for user id: ', data)
        console.log(data[0].id)
        if (data.length > 0) {
            setUser_Id(data[0].id)
            setAppState('in_game')
        } else {
            // TODO handle user does not exist
        }
    }

    return (
        <>
            {/* need to set a user and difficulty */}
            <div className="set-up-wrapper">
                <div className="settings">
                    <input type="text"
                            name="set-user"
                            id="set-user"
                            placeholder="Enter User..."
                            value={user}
                            onChange={(event) => setUser(event.target.value)}
                            />
                    <select name="difficulty"
                            id="difficulty"
                            value={difficulty}
                            onChange={(event) => setDifficulty(event.target.value)}>
                        <option value="Easy">Easy</option>
                        <option value="Normal">Normal (Default)</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div className="play">
                    <button type="submit"
                            onClick={handleSaveSettings}
                    >
                        Play
                    </button>
                </div>
            </div>
        </>
    )
}

export default SetUpComponent