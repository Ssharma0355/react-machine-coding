import React, { useState } from "react";
import Space from "./Space";


const rowStyle = {
  display: "flex",
  alginItems: "center",
  gap: "2px",
  margin: "2px",
};


function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isPlayerX, setIsPlayerX] = useState(true)

    const handleClick =(index)=>{
        const copiedSpace = [...state];
        copiedSpace[index]= isPlayerX ? "X":"0";
        setIsPlayerX(prev => !prev)
        setState(copiedSpace)
    }

    const checkWinner = ()=>{
        const isWinner=[
            [0,1,2],
            [3,4,5],
            [6,7,8],

            [0,3,6],
            [1,4,5],
            [2,5,8],

            [0,4,8],
            [3,4,6]
        ]

        for(let logic of isWinner ){
            const [a,b,c] = logic
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
                return state[a]
            }
        }
        return false
    }

    const showWinner = checkWinner()


  return (

    <div>
        {showWinner ? <p>{showWinner} is Winner!!! Yeahh!!</p> :
        <>
        <div style={rowStyle}>
        <Space onClick={()=>{handleClick(0)}} value={state[0]}/>
        <Space onClick={()=>{handleClick(1)}} value={state[1]} />
        <Space onClick={()=>{handleClick(2)}} value={state[2]}/>
      </div>
      <div style={rowStyle}>
        <Space onClick={()=>{handleClick(3)}} value={state[3]}/>
        <Space onClick={()=>{handleClick(4)}} value={state[4]}/>
        <Space onClick={()=>{handleClick(5)}} value={state[5]}/>
      </div>
      <div style={rowStyle}>
        <Space onClick={()=>{handleClick(6)}} value={state[6]}/>
        <Space onClick={()=>{handleClick(7)}} value={state[7]}/>
        <Space onClick={()=>{handleClick(8)}} value={state[8]}/>
      </div>
        </>
        
        }
      
    </div>
  );
}

export default Board;
