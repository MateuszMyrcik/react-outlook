import { CHANGE_MONTH } from '../redux/index';

export const changeMonth = monthNumber => {
   return  {
    type: CHANGE_MONTH,
    monthNumber: monthNumber,
}
};

