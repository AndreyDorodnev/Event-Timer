import React, {useState} from 'react';
import DateInput from './DateInput';
import TimeSelector from './TimeSelector';
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
            setValidateError(false);
        } else {
            setValidateError(true);
        }
    }

    const dateChange = newDate => {
        setDate(newDate.split('').map(element=>element==='/'?'-':element).join(''));
    }

    const timeChange = newTime => {
        setTime(newTime);
    }

    return (
        <form className={Classes.datePicker} onSubmit={dataSubmit}>
            <label>{`${props.caption} ${props.currentTime}`}</label>
            <DateInput dateChange={dateChange} validateError={validateError}></DateInput>
            <TimeSelector timeChange={timeChange}></TimeSelector>
            <button type="submit">save</button>
        </form>
    )
}