import React from 'react';
import Classes from './app.module.scss'; 
import MenuButton from './components/menuBtn/MenuButton';
import Menu from './components/menu/Menu';
import MenuBg from './components/menu/MenuBg';
import Clock from './components/clock/Clock';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isMenuActive: false,
    }

    this.onMenuBtnClick = this.onMenuBtnClick.bind(this);
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

export default App;
