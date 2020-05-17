import {getCurrentTimeStr} from '../time';

const initialSettings = {
    clockColor: '#000',
    bgColor: '#fff',
    directCount: false,
    stopTime: getCurrentTimeStr(),
    startTime: getCurrentTimeStr()
}

export const saveSettings = state => {
    try{
        const serializedSettings = JSON.stringify(state);
        localStorage.setItem('timerState',serializedSettings);
    } catch(error){
        console.log('local storage save state error!');
    }
}

export const loadSettings = () => {
    try{
        const serializedSettings = localStorage.getItem('timerState');
        if(serializedSettings){
            return JSON.parse(serializedSettings);
        }
        return initialSettings;
    } catch(error){
        console.log('local storage load state error!');
        return initialSettings;
    }
}