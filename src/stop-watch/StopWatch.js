import React from 'react'

const StopWatch = () => {
  return (
    <div className='stopwatch'>
        <span>00:00:00:00</span>
        <div>
            <button>
                Start
            </button>
            <button>
                Pause
            </button>
            <button>
                Reset
            </button>
        </div>
    </div>
  )
}

export default StopWatch
