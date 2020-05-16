import {THEME_CHANGE,START_TIME_CHANGE,COUNT_CHANGE, STOP_TIME_CHANGE} from './actionTypes';
import {loadSettings,saveSettings} from './localStorage';

const initialState = loadSettings();

export default function dataReducer(state=initialState,action){
    switch(action.type){
        case THEME_CHANGE: {
            !state.darkTheme? document.documentElement.setAttribute('theme','dark'): document.documentElement.setAttribute('theme','light');
            saveSettings({...state,darkTheme:!state.darkTheme});
            return {
                ...state,
                darkTheme: !state.darkTheme
            }
        }
        case START_TIME_CHANGE: {
            saveSettings({...state,startTime:action.time});
            return {
                ...state,
                startTime: action.time
            }
        }
        case STOP_TIME_CHANGE: {
            saveSettings({...state,stopTime: action.time});
            return {
                ...state,
                stopTime: action.time
            }
        }
        case COUNT_CHANGE: {
            saveSettings({...state,directCount:!state.directCount});
            return {
                ...state,
                directCount: !state.directCount
            }
        }
        default:
            return state;
    }
}

export const getStartTime = state => state.startTime;
export const getStopTime = state => state.stopTime;
export const isDarkTheme = state => state.darkTheme;
export const isDirectCount = state => state.directCount; 