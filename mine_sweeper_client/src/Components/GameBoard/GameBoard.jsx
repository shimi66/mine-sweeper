import { useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GameContext from '../../Context/GameContext'
import './GameBoard.css'
import Tile from '../Tile/Tile.jsx'
import Board from '../../Classes/Board.js'
import Timer from '../Timer/Timer.jsx'
import axios from 'axios';


function GameBoard() {
    const { boardState, setBoardState, difficulty, user, user_id, time, setTime, setWin } = useContext(GameContext);
    const navigate = useNavigate()

    // Use useRef to keep gameBoard persistent across renders
    const gameBoardRef = useRef(new Board(10, 10));

    function handleClick(rowIndex, cellIndex) {
        const gameBoard = gameBoardRef.current; // Access gameBoard from ref
        // console.log(gameBoard);
        gameBoard.handleBoardClick(rowIndex, cellIndex);

        if (gameBoard.game_over) {
            console.log('game over');
        } else {
            console.log('game continues');
        }

        const tmp = gameBoard.outputState();
        setBoardState(tmp);
        // console.log(boardState); // This will now show the updated state after re-render
        // console.log(gameBoard.outputState()); // Ensure this is the updated state
        if (gameBoard.game_over == true) {
            if (gameBoard.win == true) {
                setWin(true)
                axios.post('http://localhost:4000/scores', {
                    user_id: user_id,
                    difficulty: difficulty,
                    time: time
                })
                .then(res => console.log(res))
            } else {
                setWin(false)
            }
            navigate('/gameover')
        }
    }

    useEffect(() => {
        let newGameBoard;

        if (difficulty === 'Normal') {
            newGameBoard = new Board(10, 10, 10);
            newGameBoard.initBombs();
            newGameBoard.initNonBombs();
        } else if (difficulty === 'Hard') {
            newGameBoard = new Board(15, 15, 22);
            newGameBoard.initBombs();
            newGameBoard.initNonBombs();
        } else if (difficulty === 'Easy') {
            newGameBoard = new Board(8, 8, 6);
            newGameBoard.initBombs();
            newGameBoard.initNonBombs();
        } else {
            console.log('Invalid difficulty');
            return;
        }

        // Store the new gameBoard in the ref so it doesn't change on re-renders
        gameBoardRef.current = newGameBoard;
        setBoardState(newGameBoard.outputState());

    }, [difficulty]); // Dependency array now includes 'difficulty', so it runs when difficulty changes

    return (
        <>
            <h3>Hello {user}, your difficulty is set to {difficulty}</h3>
            <Timer />
            <table>
                <tbody>
                    {Array.from({ length: gameBoardRef.current.l }, (_, rowIndex) => (
                        <tr key={rowIndex}>
                            {Array.from({ length: gameBoardRef.current.w }, (_, cellIndex) => {
                                const index = rowIndex * gameBoardRef.current.w + cellIndex;
                                const cellValue = boardState[index];

                                return (
                                    <td key={cellIndex} className="tile" onClick={() => handleClick(rowIndex, cellIndex)}>
                                        <Tile value={cellValue} />
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default GameBoard