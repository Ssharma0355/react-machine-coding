import React from 'react'
import "./Progressbar.css"

const ProgressBar = ({progress}) => {
  return (
    <div className='progress-outer'>
        <div
        className='progress-inner'
        style={{width:`${progress}%`,color: progress < `${5}` ? "black" : "white"}}
        >{progress}%</div>
      
    </div>
  )
}

export default ProgressBar

