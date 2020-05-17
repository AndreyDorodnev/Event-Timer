import React, {useState,useEffect,useRef} from 'react';
import {GithubPicker} from 'react-color';
import Classes from './colorPicker.module.scss';

export default props => {

    const [color,setColor] = useState(getComputedStyle(document.documentElement).getPropertyValue(props.colorVar));
    const [showPicker,setShowPicker] = useState(false);
    const pickerRef = useRef(0);

    const showBtnClick = () => {
        setShowPicker(!showPicker);
    }
    const colorChange = newColor => {
        setColor(newColor.hex);
        //set new color to given css variable
        document.documentElement.style.setProperty(props.colorVar,newColor.hex);
    }

    useEffect(()=>{
        //set current color to picker button
        pickerRef.current.style.setProperty('--pickerColor',color);
    })

    return (
        <div className={Classes.colorPicker} ref={pickerRef}>
            <div className={Classes.colorBtn} onClick={showBtnClick}></div>
            <span className={Classes.caption}>{props.caption}</span>
            <div className={Classes.picker}>
                {
                    showPicker? 
                    (
                        <GithubPicker 
                            color={color} 
                            onChange={colorChange}
                            
                        >
                        </GithubPicker>
                    ) : 
                    (null)
                }

            </div>
        </div>
    )
}