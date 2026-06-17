import React, { useState } from 'react'
import MainSpace from './MainSpace'
const boardStyle = {
    display:"flex",
}

function MainBoard() {
    const [state, setState] = useState(Array(9).fill(null))
    const [isXPlayer, setIsXPlayer] = useState(true)

    const handleClick=(index)=>{
        console.log(index, "clicked")
        const copyState = [...state];
        copyState[index] = isXPlayer ? "X" : "0";
        setIsXPlayer(prev => !prev);
        setState(copyState)
    }

    // winner logic

    const winnerAlgo=()=>{
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],

            [0,2,6],
            [1,4,7],
            [2,5,8],

            [0,4,8],
            [2,4,6],
        ]
        for(let logic of winnerLogic){
            const [a,b,c] = logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a]
            }
            
        }
        return false
    }
    const whoIsWinner = winnerAlgo()
  return (
    <div>
        {whoIsWinner ? <p>{whoIsWinner} is winner</p>:<>
        <div style={boardStyle}>
            <MainSpace onClick={()=>handleClick(0) } value={state[0]} />
            <MainSpace onClick={()=>handleClick(1) } value={state[1]} />
            <MainSpace onClick={()=>handleClick(2) } value={state[2]}/>
        </div>

        <div style={boardStyle}>
            <MainSpace onClick={()=>handleClick(3) } value={state[3]}/>
            <MainSpace onClick={()=>handleClick(4) } value={state[4]}/>
            <MainSpace onClick={()=>handleClick(5) } value={state[5]}/>
        </div>

        <div style={boardStyle}>
            <MainSpace onClick={()=>handleClick(6) } value={state[6]}/>
            <MainSpace onClick={()=>handleClick(7) } value={state[7]}/>
            <MainSpace onClick={()=>handleClick(8) } value={state[8]}/>
        </div>
        
        </>}
       
    </div>
  )
}

export default MainBoard
