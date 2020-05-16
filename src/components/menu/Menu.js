import React from 'react';
import {connect} from 'react-redux';
import {getStartTime,getStopTime,isDarkTheme,isDirectCount} from '../../store/dataReducer';
import {THEME_CHANGE,START_TIME_CHANGE,COUNT_CHANGE, STOP_TIME_CHANGE} from '../../store/actionTypes';
import Classes from './menu.module.scss';
// import Classes from './menu.module.scss';
import MenuButton from '../menuBtn/MenuButton';
import ToggleButton from '../toggleBtn/ToggleButton';
// import DateInput from '../elements/DateInput';

import DatePicker from '../datePicker/DatePicker';

function Menu(props) {

  return (
      <div className={[Classes.menu,props.active? Classes.menuActive : ''].join(' ')}>
          <MenuButton btnClick={props.btnClick}></MenuButton>
          <ToggleButton text='direct mode' active={props.directCount} buttonClick={props.countModeChange} ></ToggleButton>
          <ToggleButton text="dark theme" active={props.darkTheme} buttonClick={props.themeChange}></ToggleButton>
          <DatePicker caption="Start time" currentTime={props.startTime} setTime={props.setStartTime}></DatePicker>
          <DatePicker caption="Stop time" currentTime={props.stopTime} setTime={props.setStopTime}></DatePicker>
      </div>
  )
}

const mapStateToProps = state => {
    return {
        stopTime: getStopTime(state),
        startTime: getStartTime(state),
        darkTheme: isDarkTheme(state),
        directCount: isDirectCount(state)
    }
  }
  
  const mapDispatchToProps = dispatch=>{
    return {
      setStopTime: (time) => dispatch({type:STOP_TIME_CHANGE,time}),
      setStartTime: (time) => dispatch({type:START_TIME_CHANGE,time}),
      themeChange: () => dispatch({type:THEME_CHANGE}),
      countModeChange: () => dispatch({type:COUNT_CHANGE}),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Menu);
