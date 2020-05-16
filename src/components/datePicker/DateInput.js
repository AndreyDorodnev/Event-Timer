import React, {useState} from 'react';
import Classes from './datePicker.module.scss';

export default props => {

    const [date,setDate] = useState('');

    const inputDateChange = event => {
        const newDate = dateValidate(event.target.value)
        setDate(newDate);
        props.dateChange(newDate);
    }

    const dateValidate = dateStr => {
        if(dateStr.length>=10)
            return dateStr.slice(0,10);
        else {
            if(dateStr.length>date.length){
                const result = [];
                dateStr  = dateStr.replace(/\D+/g,'').split('').forEach((element,index) => {
                    result.push(element); 
                    if(index===1||index===3)
                        result.push('/') 
                });
                return result.join('');
            } else {
                return dateStr;
            }
        }
    }

    return (
        <div className={Classes.dateInput}>
            <input className={props.validateError? Classes.inputError:''} type="text" placeholder="DD/MM/YYYY" value={date} onChange={inputDateChange}></input>
            {
                props.validateError?
                (<p>Wrong date</p>):
                (null)
            }
        </div>
    )
}