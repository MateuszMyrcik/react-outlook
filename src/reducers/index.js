import { CHANGE_MONTH } from '../redux/index';

const date = new Date();

const initialState = {
    monthNumber: date.getMonth()
}

export const reducer = (prevState = initialState, action) => {
    switch(action.type) {
      case CHANGE_MONTH: 
        return {
          ...prevState,
          monthNumber: action.monthNumber,
        }
      default: 
        console.warn('Reducer get unknow action type')
        return prevState;
    }
  }