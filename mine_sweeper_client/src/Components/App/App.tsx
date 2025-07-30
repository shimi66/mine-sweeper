import { useEffect, useContext } from 'react'
import './App.css'
import GameBoard from '../GameBoard/GameBoard.jsx'
import EndOfGame from '../EndOfGame/EndOfGame.jsx'
import SetUpComponent from '../SetUpComponent/SetUpComponent.jsx'
import GameContext from '../../Context/GameContext.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const {user, setUser} = useContext(GameContext)
  const {user_id, setUser_Id} = useContext(GameContext)
  const {difficulty, setDifficulty} = useContext(GameContext)
  const {appState, setAppState} = useContext(GameContext)
  const {boardState, setBoardState} = useContext(GameContext)
  const {time, setTime} = useContext(GameContext)
  const {win, setWin} = useContext(GameContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (appState == 'in_settings') {
      navigate("/")
    } else if (appState == 'in_game') {
      navigate("/play")
    } else if (appState == 'end_of_game') {
      navigate("/gameover")
    } else {
      console.log('Should not reach this block')
    }
  }, [appState])

  return (
    <>
      <div className="page-wrapper">
        <div className="header">
          <h1 className="title">
            Welcome to Mine Sweeper
          </h1>
        </div>
        <GameContext.Provider  value={{ user, setUser,
                                        user_id, setUser_Id,
                                        difficulty, setDifficulty,
                                        appState, setAppState,
                                        boardState, setBoardState,
                                        win, setWin,
                                        time, setTime}}>
          <div className="main">
            {/* {inSettings ?
                <>
                  <SetUpComponent />
                </>
              :
              <>
                <h3>Hello {user}, your difficulty is set to {difficulty}</h3>
                <GameBoard />
              </>
            } */}
            <Routes>
              <Route path='/' element={<SetUpComponent />}/>
              <Route path='/play' element={<GameBoard />}/>
              <Route path='/gameover' element={<EndOfGame />}/>
            </Routes>
          </div>
        </GameContext.Provider>
      </div>
    </>
  )
}

export default App
