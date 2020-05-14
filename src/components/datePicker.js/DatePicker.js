import React, {useState} from 'react';
import DateInput from './DateInput';
import Classes from './datePicker.module.scss';
export default props => {

    const [time,setTime] = useState({hours:'00', minutes:'00'});
    const [date,setDate] = useState('');

    const dataSubmit = (event) => {
        event.preventDefault();
        console.log('date',date);
        console.log('time',time);
        
    }

    const dateChange = newDate => {
        setDate(newDate);
    }

    return (
        <form className={Classes.datePicker} onSubmit={dataSubmit}>
            <label>{props.caption}</label>
            <DateInput dateChange={dateChange} validateError={false}></DateInput>
            <div className={Classes.timer}>
                <div className={Classes.hours}>{time.hours}</div>
                <span>:</span>
                <div className={Classes.minutes}>{time.minutes}</div>
            </div>
            <button type="submit">save</button>
        </form>
    )
}