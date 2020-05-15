import React, {useState} from 'react';
import DateInput from './DateInput';
import Classes from './datePicker.module.scss';
import {checkDateValid} from '../../time';

export default props => {

    const [time,setTime] = useState({hours:'00', minutes:'00'});
    const [date,setDate] = useState('');
    const [validateError,setValidateError] = useState(false);

    const getTimeStr = () => {
        return time.hours + ':' + time.minutes; 
    }

    const dataSubmit = (event) => {
        event.preventDefault();
        if(checkDateValid(date)) {
            props.setTime(date + ' ' + getTimeStr());
            // props.saveSettings();
            setValidateError(false);
        } else {
            setValidateError(true);
        }
    }

    const dateChange = newDate => {
        setDate(newDate.split('').map(element=>element==='/'?'-':element).join(''));
    }

    return (
        <form className={Classes.datePicker} onSubmit={dataSubmit}>
            <label>{`${props.caption} ${props.currentTime}`}</label>
            <DateInput dateChange={dateChange} validateError={validateError}></DateInput>
            <div className={Classes.timer}>
                <div className={Classes.hours}>{time.hours}</div>
                <span>:</span>
                <div className={Classes.minutes}>{time.minutes}</div>
            </div>
            <button type="submit">save</button>
        </form>
    )
}