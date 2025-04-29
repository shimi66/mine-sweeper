import { createContext, useState } from 'react'

const GameContext = createContext({user: '', setUser: () => {},
                                    user_id: 0, setUser_Id: () => {},
                                    difficulty: 'Normal', setDifficulty: () => {},
                                    time: 0, setTime: () => {},
                                    appState: 'in_settings', setAppState: () => {},
                                    win: false, setWin: () => {},
                                    boardState: '----------------------------------------------------------------------------------------------------', setBoardState: () => {}});


export function GameContextProvider({ children }) {
    const [user, setUser] = useState('');
    const [user_id, setUser_Id] = useState(0);
    const [difficulty, setDifficulty] = useState('Normal');
    const [time, setTime] = useState(0);
    const [win, setWin] = useState(false);
    const [appState, setAppState] = useState('in_settings')
    const [boardState, setBoardState] = useState('----------------------------------------------------------------------------------------------------')


    return (
        <GameContext.Provider value={{ user, setUser,
                                        user_id, setUser_Id,
                                        difficulty, setDifficulty,
                                        time, setTime,
                                        win, setWin,
                                        appState, setAppState,
                                        boardState, setBoardState}}>
            {children}
        </GameContext.Provider>
    );
    }

export default GameContext
