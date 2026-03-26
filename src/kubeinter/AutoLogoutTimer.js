import React, { useState, useEffect } from 'react';

export default function AutoLogoutTimer() {
  const [secondsLeft, setSecondsLeft] = useState(10);
//   const [isWarning, setIsWarning] = useState(false);

const isWarning = secondsLeft <3;

  // The Timer Logic
  useEffect(() => {
   const timerId = setInterval(()=>{
    setSecondsLeft((prev)=>{
        if(prev <= 1){
            clearInterval(timerId)
            return 0;
        }
        return prev -1;
    });
   },1000)

   return ()=>{
    clearInterval(timerId)
   }
 
  }, []); 



  return (
    <div style={{ 
      padding: '20px', 
      background: isWarning ? '#ffcccc' : '#f4f4f4',
      borderRadius: '8px',
      width: '300px'
    }}>
      <h2>Session expires in: {secondsLeft}s</h2>
      <button onClick={() => setSecondsLeft(10)}>
        Keep me logged in
      </button>
    </div>
  );
}