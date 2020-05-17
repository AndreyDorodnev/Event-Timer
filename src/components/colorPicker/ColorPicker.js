import React, {useState,useEffect,useRef} from 'react';
import {GithubPicker} from 'react-color';
import Classes from './colorPicker.module.scss';

export default props => {
    //some hardcoded colors for theme
    const colors = ['#ffffff', '#000000', "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107"];

    const [color,setColor] = useState(props.color);
    const [showPicker,setShowPicker] = useState(false);
    const pickerRef = useRef(0);

    const showBtnClick = () => {
        setShowPicker(!showPicker);
    }
    const colorChange = newColor => {
        setColor(newColor.hex);
        setShowPicker(false);
        //save new color to state
        props.change(newColor.hex);
    }

    useEffect(()=>{
        //set current color to picker button
        pickerRef.current.style.setProperty('--pickerColor',color);
        //set new color to given css variable
        document.documentElement.style.setProperty(props.colorVar,color);
    });

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
                            colors={colors}
                        >
                        </GithubPicker>
                    ) : 
                    (null)
                }

            </div>
        </div>
    )
}