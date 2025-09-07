import React from 'react'
import { useState, useEffect } from 'react'
import './StopWatch.css'
import Button from '../../primaryComponents/Button/Button.jsx'

const StopWatch = () => {

    const [seconds, setSeconds] = useState(0);
    const [minCount, setMinCount] = useState(0);
    const [hoursCount, setHoursCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        if(seconds >= 0) {
            setSeconds(seconds + 1);
        }      }
        , 1000);
        return;
    }, [seconds]);


    useEffect(() => {
        if(seconds === 60) {
            setMinCount(minCount + 1);
            setSeconds(0);
        }
        return;
    }, [seconds, minCount]);

    useEffect(() => {
        if(minCount === 60) {
            setHoursCount(hoursCount + 1);
            setMinCount(0);
        }
        return;
    }, [minCount, hoursCount]);


    

  return (
    <>
    <div className='stopWatchContainer'>
        <h1>Stop Watch</h1>
        <div className='stopWatch'>
            <span className='time'>{hoursCount}</span>
            <span className='time'>{minCount}</span>
            <span className='time'>{seconds}</span>
        </div>
    </div>
    </>
  )
}

export default StopWatch
