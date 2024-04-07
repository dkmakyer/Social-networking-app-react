import React from 'react'
import triangleSignal from "./triangleSignal.png"
import waveSignal from "./waveSignal.png"
import batteryStatus from "./batteryStatus.png"

const TopScreen = () => {
  return (
    <div>
        <div className='main-screen'>
            <div className="top-screen">
            <h1 className='screen-text'>9:41</h1>
            <div className="top-images">
                <img src={triangleSignal} alt="image not found" />
                <img src={waveSignal} alt="image not found" />
                <img src={batteryStatus} alt="image not found" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default TopScreen
