import React, { useState } from 'react'
import './CountdownTimer.css'

const CountdownTimer = props => {
  const [days, setDays] = useState(null)
  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)

  setInterval(() => {
    const currentDate = new Date().getTime();
    const distance = props.deadlineDate - currentDate;
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
  }, 1000)


  return (
    <div className="wrapper">
      <h3 className="coming-soon">Coming Soon...</h3>
      <div className="countdown-timer">
        <div className="countdown">
          <div className="countdown__days">
            <div className="number">{days}</div>
            <span>Days</span>
          </div>

          <div className="countdown__hours">
            <div className="number">{hours}</div>
            <span>Hours</span>
          </div>

          <div className="countdown__minutes">
            <div className="number">{minutes}</div>
            <span>Minutes</span>
          </div>

          <div className="countdown__seconds">
            <div className="number">{seconds}</div>
            <span>Seconds</span>
          </div>
        </div>

        <p className="under-development-message">Our page is under development. We`ll be here soon with our new awesome functions.</p>
      </div>
    </div>
  )
}

export default CountdownTimer