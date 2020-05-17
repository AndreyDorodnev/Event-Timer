import React from 'react';
import {connect} from 'react-redux';
import {getStartTime,getStopTime,isDirectCount,getBgColor,getClockColor} from '../../store/dataReducer';
import {START_TIME_CHANGE,COUNT_CHANGE, STOP_TIME_CHANGE,CLOCK_COLOR_CHANGE,BG_COLOR_CHANGE} from '../../store/actionTypes';
import Classes from './menu.module.scss';
import MenuButton from '../menuBtn/MenuButton';
import ToggleButton from '../toggleBtn/ToggleButton';
import DatePicker from '../datePicker/DatePicker';
import ColorPicker from '../colorPicker/ColorPicker';

function Menu(props) {

  return (
      <div className={[Classes.menu,props.active? Classes.menuActive : ''].join(' ')}>
          <MenuButton btnClick={props.btnClick}></MenuButton>
          <ToggleButton text='direct mode' active={props.directCount} buttonClick={props.countModeChange} ></ToggleButton>
          <DatePicker caption="Start time" currentTime={props.startTime} setTime={props.setStartTime}></DatePicker>
          <DatePicker caption="Stop time" currentTime={props.stopTime} setTime={props.setStopTime}></DatePicker>
          <ColorPicker color={props.clockColor} change={props.clockColorChange} colorVar="--clockColor" caption="Clock color"></ColorPicker>
          <ColorPicker color={props.bgColor} change={props.bgColorChange} colorVar="--backgroundColor" caption="Background color"></ColorPicker>
      </div>
  )
}

const mapStateToProps = state => {
    return {
        stopTime: getStopTime(state),
        startTime: getStartTime(state),
        clockColor: getClockColor(state),
        bgColor: getBgColor(state),
        directCount: isDirectCount(state)
    }
  }
  
  const mapDispatchToProps = dispatch=>{
    return {
      setStopTime: (time) => dispatch({type:STOP_TIME_CHANGE,time}),
      setStartTime: (time) => dispatch({type:START_TIME_CHANGE,time}),
      clockColorChange: (color) => dispatch({type:CLOCK_COLOR_CHANGE,color}),
      bgColorChange: (color) => dispatch({type:BG_COLOR_CHANGE,color}),
      countModeChange: () => dispatch({type:COUNT_CHANGE}),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Menu);
