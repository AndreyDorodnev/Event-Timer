import moment from 'moment';

const DATE_FORMAT = "DD-MM-YYYY HH:mm";  //example 13-05-2020 17:43
const SHORT_DATE_FORMAT = "DD-MM-YYYY";
const pipe = (...fns) => x => fns.reduce((res,fn)=> fn(res),x);
const checkLength = number => String(number).length>1? number : '0' + number;
const checkVal = number => number>=0? number : '00';
const incr = num => num+1;
const decr = num => num-1;

export const checkDateValid = dateStr => {
    return moment(dateStr,SHORT_DATE_FORMAT).format(SHORT_DATE_FORMAT)==='Invalid date'? false : true;

}
export const getPrevYear = () => moment().subtract(1,'y');
export const getNextYear = () => moment().add(1,'y');
export const getCurrentTimeStr = () => moment().format(DATE_FORMAT);

export const getCurrentMoment = () => moment();
export const getMomentFromStr = timeStr => moment(timeStr,DATE_FORMAT);
export const getMilliseconds = timeMoment => timeMoment.format('x');

const getDurationLeft = timeMoment => new moment.duration(getMilliseconds(timeMoment)-getMilliseconds(getCurrentMoment()));
const getDurationPassed = timeMoment => new moment.duration(getMilliseconds(getCurrentMoment())-getMilliseconds(timeMoment));

const getDaysFromDuration = duration => duration.asDays();
const getHoursFromDuration = duration => duration.hours();
const getMinutesFromDuration = duration => duration.minutes();
const getSecondsFromDuration = duration => duration.seconds();

export const getDaysLeft = stopTime => pipe(getMomentFromStr,getDurationLeft,getDaysFromDuration,Math.floor,checkLength,checkVal)(stopTime);
export const getHoursLeft = stopTime => pipe(getMomentFromStr,getDurationLeft,getHoursFromDuration,decr,checkLength,checkVal)(stopTime);
export const getMinutesLeft = stopTime => pipe(getMomentFromStr,getDurationLeft,getMinutesFromDuration,checkLength,checkVal)(stopTime);
export const getSecondsLeft = stopTime => pipe(getMomentFromStr,getDurationLeft,getSecondsFromDuration,checkLength,checkVal)(stopTime);

export const getDaysPassed = startTime => pipe(getMomentFromStr,getDurationPassed,getDaysFromDuration,Math.floor,checkLength,checkVal)(startTime);
export const getHoursPassed = startTime => pipe(getMomentFromStr,getDurationPassed,getHoursFromDuration,incr,checkLength,checkVal)(startTime);
export const getMinutesPassed = startTime => pipe(getMomentFromStr,getDurationPassed,getMinutesFromDuration,checkLength,checkVal)(startTime);
export const getSecondsPassed = startTime => pipe(getMomentFromStr,getDurationPassed,getSecondsFromDuration,checkLength,checkVal)(startTime);