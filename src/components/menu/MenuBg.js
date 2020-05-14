import React from 'react';
import Classes from './menu.module.scss';

export default props => {
    return (
        <div className={[Classes.menuBg,props.active?Classes.menuBgActive:''].join(' ')} onClick={props.bgClick}>
        </div>
    )
}