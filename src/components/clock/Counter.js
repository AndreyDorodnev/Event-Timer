import React from 'react';
import Classes from './clock.module.scss';

export default props => {
    return (
        <div className={Classes.counter} >
            <p>{props.value}</p>
            <span>{props.label}</span>
        </div>
    )
}