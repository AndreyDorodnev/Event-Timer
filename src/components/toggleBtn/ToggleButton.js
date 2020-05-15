import React from 'react';
import Classes from './toggleButton.module.scss';

export default props => {
    return (
        <div className={Classes.toggleButton}>
            <div className={Classes.border} onClick={props.buttonClick}>
                <div className={[Classes.button,props.active?Classes.active:''].join(' ')}></div>
            </div>
            <span>{props.text}</span>
        </div>
    )
}