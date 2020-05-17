import React, {useState} from 'react';
import Counter from './Counter';
import Classes from './clock.module.scss';

import useInterval from '../../hooks/useInterval';

import {getDaysPassed,getHoursPassed,getMinutesPassed,getSecondsPassed} from '../../time';
import {getDaysLeft,getHoursLeft,getSecondsLeft,getMinutesLeft} from '../../time';

import {getStartTime,getStopTime,isDirectCount} from '../../store/dataReducer';
import {connect} from 'react-redux';

function Clock(props) {

    const [days,setDays] = useState(0);
    const [hours,setHours] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);

    const showTime = () => {
        let currentDays,currentHours,currentMinutes,currentSeconds;
        if(props.directCount){
             currentDays = getDaysPassed(props.startTime);
             currentHours = getHoursPassed(props.startTime);
             currentMinutes = getMinutesPassed(props.startTime);
             currentSeconds = getSecondsPassed(props.startTime);
        } else{
             currentDays = getDaysLeft(props.stopTime);
             currentHours = getHoursLeft(props.stopTime);
             currentMinutes = getMinutesLeft(props.stopTime);
             currentSeconds = getSecondsLeft(props.stopTime);
        }

        if(days!==currentDays)
        setDays(currentDays);
        if(hours!==currentHours)
            setHours(currentHours);
        if(minutes!==currentMinutes)
            setMinutes(currentMinutes);
        if(seconds!==currentSeconds)
            setSeconds(currentSeconds);
    }
    
    useInterval(showTime,1000)

    return(
        <div className={Classes.clock}>
            <Counter value={days} label='Days'></Counter>
            <Counter value={hours} label='Hours'></Counter>
            <span className={Classes.divider}>:</span>
            <Counter value={minutes} label='Minutes'></Counter>
            <span className={Classes.divider}>:</span>
            <Counter value={seconds} label='Seconds'></Counter>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stopTime: getStopTime(state),
        startTime: getStartTime(state),
        directCount: isDirectCount(state)
    }
}

export default connect(mapStateToProps)(Clock);