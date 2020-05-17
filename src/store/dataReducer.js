import {START_TIME_CHANGE,COUNT_CHANGE, STOP_TIME_CHANGE,CLOCK_COLOR_CHANGE,BG_COLOR_CHANGE} from './actionTypes';
import {loadSettings,saveSettings} from './localStorage';

const initialState = loadSettings();

export default function dataReducer(state=initialState,action){
    switch(action.type){
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
        case CLOCK_COLOR_CHANGE: {
            saveSettings({...state,clockColor:action.color});
            return {
                ...state,
                clockColor: action.color
            }
        }
        case BG_COLOR_CHANGE: {
            saveSettings({...state,bgColor: action.color});
            return {
                ...state,
                bgColor: action.color
            }
        }
        default:
            return state;
    }
}

export const getStartTime = state => state.startTime;
export const getStopTime = state => state.stopTime;
export const isDirectCount = state => state.directCount; 
export const getClockColor = state => state.clockColor;
export const getBgColor = state => state.bgColor;