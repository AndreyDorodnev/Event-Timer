import React from 'react';
import Classes from './app.module.scss'; 
import MenuButton from './components/menuBtn/MenuButton';
import MenuClasses from './components/menu/menu.module.scss';
import Menu from './components/menu/Menu';
import MenuBg from './components/menu/MenuBg';

import moment from 'moment';
import { getDaysLeft,getHoursLeft,getMinutesLeft,getSecondsLeft } from './time';
import {getDaysPassed,getHoursPassed,getMinutesPassed,getSecondsPassed} from './time';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isMenuActive: false,
      menuClasses: [MenuClasses.menu],
    }

    this.onMenuBtnClick = this.onMenuBtnClick.bind(this);
  }

  componentDidMount() {
    const event = moment('19-07-2020 00:00',"DD-MM-YYYY HH:mm");
    const start = moment('19-07-2019 00:00',"DD-MM-YYYY HH:mm");
    console.log(getDaysLeft(event),getHoursLeft(event),getMinutesLeft(event),getSecondsLeft(event));
    console.log(getDaysPassed(start),getHoursPassed(start),getMinutesPassed(start),getSecondsPassed(start));
  }

  onMenuBtnClick() {
    const showMenu = !this.state.isMenuActive; //toggle menu flag
    const arr = this.state.menuClasses;
    showMenu ? arr.push(MenuClasses.menuActive) : arr.pop();
    this.setState({isMenuActive: showMenu, menuClasses: arr});
  }

  render() {
    return (
      <div className={Classes.app}>
        <MenuButton  btnClick={this.onMenuBtnClick}></MenuButton>
        <Menu classes={this.state.menuClasses} btnClick={this.onMenuBtnClick}></Menu>
        <MenuBg active={this.state.isMenuActive} bgClick={this.onMenuBtnClick}></MenuBg>
      </div>
    )
  }
}
