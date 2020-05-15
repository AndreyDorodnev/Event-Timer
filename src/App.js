import React from 'react';
import Classes from './app.module.scss'; 
import MenuButton from './components/menuBtn/MenuButton';
import Menu from './components/menu/Menu';
import MenuBg from './components/menu/MenuBg';
import Clock from './components/clock/Clock';
// import moment from 'moment';
// import { getDaysLeft,getHoursLeft,getMinutesLeft,getSecondsLeft } from './time';
// import {getDaysPassed,getHoursPassed,getMinutesPassed,getSecondsPassed} from './time';
// import {getCurrentTimeStr} from './time';

import {connect} from 'react-redux';
import {getStartTime,getStopTime,isDarkTheme,isDirectCount} from './store/dataReducer';
import {THEME_CHANGE,START_TIME_CHANGE,COUNT_CHANGE, STOP_TIME_CHANGE} from './store/actionTypes';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isMenuActive: false,
    }

    this.onMenuBtnClick = this.onMenuBtnClick.bind(this);
  }

  componentDidMount() {
    console.log('Mount',this.props);
    
    // console.log(getCurrentTimeStr());
    // const event = moment('19-07-2020 00:00',"DD-MM-YYYY HH:mm");
    // const start = moment('19-07-2019 00:00',"DD-MM-YYYY HH:mm");
    // console.log(getDaysLeft(event),getHoursLeft(event),getMinutesLeft(event),getSecondsLeft(event));
    // console.log(getDaysPassed(start),getHoursPassed(start),getMinutesPassed(start),getSecondsPassed(start));
  }

  onMenuBtnClick() {
    const showMenu = !this.state.isMenuActive; //toggle menu flag
    this.setState({isMenuActive: showMenu});
  }

  render() {
    return (
      <div className={Classes.app}>
        <MenuButton  btnClick={this.onMenuBtnClick}></MenuButton>
        <Menu active={this.state.isMenuActive} btnClick={this.onMenuBtnClick}></Menu>
        <MenuBg active={this.state.isMenuActive} bgClick={this.onMenuBtnClick}></MenuBg>
        <Clock></Clock>
      </div>
    )
  }
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
    stopTimeChange: (time) => dispatch({type:STOP_TIME_CHANGE,time}),
    startTimeChange: (time) => dispatch({type:START_TIME_CHANGE,time}),
    themeChange: () => dispatch({type:THEME_CHANGE}),
    countModeChange: () => dispatch({type:COUNT_CHANGE})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);