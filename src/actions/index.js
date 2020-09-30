import { actionsTypes } from '../redux/types';

export const changeMonth = monthNumber => {
   return  {
    type: actionsTypes.CHANGE_MONTH,
    monthNumber: monthNumber,
}
};

export const openForm = (day, month ) => {
    return {
        type: actionsTypes.OPEN_FORM,
        isFormOpen: true,
        day,
        month,
    }
}

export const closeForm = (taskValue = '', day= '', month='') => {
    return {
        type: actionsTypes.CLOSE_FORM,
        isFormOpen: false,
        taskValue,
        day,
        month,
    }
}


