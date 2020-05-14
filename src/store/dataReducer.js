import {THEME_CHANGE,START_TIME_CHANGE,COUNT_CHANGE, STOP_TIME_CHANGE} from './actionTypes';
import {loadSettings,saveSettings} from './localStorage';

const initialState = loadSettings();

export default function dataReducer(state=initialState,action){
    switch(action.type){
        case THEME_CHANGE: {
            return {
                ...state,
                darkTheme: !state.darkTheme
            }
        }
        case START_TIME_CHANGE: {
            return {
                ...state,
                startTime: action.startTime
            }
        }
        case STOP_TIME_CHANGE: {
            return {
                ...state,
                stopTime: action.stopTime
            }
        }
        case COUNT_CHANGE: {
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