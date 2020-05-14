import React from 'react';
// import Classes from './menu.module.scss';
import MenuButton from '../menuBtn/MenuButton';
// import ToggleButton from '../elements/ToggleButton';
// import DateInput from '../elements/DateInput';

import DatePicker from '../datePicker.js/DatePicker';

export default props => {
    return (
        <div className={props.classes.join(' ')}>
            <MenuButton btnClick={props.btnClick}></MenuButton>
            <DatePicker caption="Start time"></DatePicker>
            <DatePicker caption="Stop time"></DatePicker>
            {/* <ToggleButton text={'direct mode'} active={props.directCount} buttonClick={props.toggleCount} ></ToggleButton> */}
            {/* <ToggleButton text={'dark theme'} active={props.darkTheme} buttonClick={props.toggleTheme}></ToggleButton> */}
            {/* <DateInput changeStopTime={props.changeStopTime}></DateInput> */}
        </div>
    )
}