import {  actionsTypes } from '../redux/types';
import fs from 'fs';

function writeFile(data) {
  fs.writeFileSync('../data/daysSchedules.json', JSON.stringify(data), function(err) {
    console.log(err);
  });
}

const date = new Date();

const initialState = {
    monthNumber: date.getMonth(),
    isFormOpen: false,
}

export const reducer = (prevState = initialState, action) => {
    switch(action.type) {
      case actionsTypes.CHANGE_MONTH: 
        return {
          ...prevState,
          monthNumber: action.monthNumber,
        }
      case actionsTypes.OPEN_FORM:
        return {
          ...prevState,
          isFormOpen: action.isFormOpen,
          day: action.day,
          month: action.month
        }
      case actionsTypes.CLOSE_FORM:
        writeFile({a:1})
        return {
          ...prevState,
          isFormOpen: action.isFormOpen,
          taskValue: action.taskValue,
          day: action.day,
          month: action.month
        }
      default: 
        console.warn('Reducer get unknow action type')
        return prevState;
    }
  }
  