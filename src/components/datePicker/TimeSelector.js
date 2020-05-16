import React, {useState,useRef} from 'react';
import Classes from './datePicker.module.scss';
import {ReactComponent as Arrow} from '../arrow.svg';

export default props => {

    const [hours,setHours] = useState('00');
    const [minutes,setMinutes] = useState('00');

    const hoursSelector = useRef(null);

    const getValStr = val => {
        return val.length>1? val : '0'+val; 
    }

    const hoursChange = newHours => {
        setHours(newHours);
        props.timeChange({hours:newHours,minutes});
    }
    const minutesChange = newMinutes => {
        setMinutes(newMinutes);
        props.timeChange({hours,minutes:newMinutes});
    }

    const increaseValue = (val,max,callback) => {
        val = Number(val);
        val = val===max? 0: val + 1;
        callback(getValStr(String(val)));  
    }

    const decreaseValue = (val,max,callback) => {
        val = Number(val);
        val = val===0? max: val - 1;
        callback(getValStr(String(val)));  
        props.timeChange({hours,minutes});
    }

    const onKeyHours = event => {
        if(event.keyCode===38){
            increaseValue(hours,23,hoursChange);
        } else if(event.keyCode===40){
            decreaseValue(hours,23,hoursChange);
        }
    }

    const onKeyMinutes = event => {
        if(event.keyCode===38){
            increaseValue(minutes,59,minutesChange);
        } else if(event.keyCode===40){
            decreaseValue(minutes,59,minutesChange);
        }
    }

    return (
        <div className={Classes.timeSelector}>
            <div className={Classes.hours} ref={hoursSelector} onKeyDown={onKeyHours} tabIndex="0">
                <p>{hours}</p>
                <div className={Classes.buttons}>
                    <div className={Classes.upBtn} onClick={(evt)=>increaseValue(hours,23,hoursChange)}><Arrow></Arrow></div>
                    <div className={Classes.downBtn} onClick={(evt)=>decreaseValue(hours,23,hoursChange)}><Arrow></Arrow></div>
                </div>
            </div>
            <span>:</span>
            <div className={Classes.minutes} onKeyDown={onKeyMinutes} tabIndex="0">
                <p>{minutes}</p>
                <div className={Classes.buttons}>
                    <div className={Classes.upBtn} onClick={(evt)=>increaseValue(minutes,59,minutesChange)}><Arrow></Arrow></div>
                    <div className={Classes.downBtn} onClick={(evt)=>decreaseValue(minutes,59,minutesChange)}><Arrow></Arrow></div>
                </div>
            </div>
        </div>
    )
}