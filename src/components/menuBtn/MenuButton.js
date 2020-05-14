import React from 'react';
import {ReactComponent as MenuIcon} from '../menu.svg';
import Classes from "./MenuButton.module.scss";

export default (props) => {
    return (
        <div className={Classes.menuBtn} onClick={props.btnClick}>
            <MenuIcon></MenuIcon>
        </div>
    )
}