import { useSelector, useDispatch} from 'react-redux'
import React, { useState } from "react";
import { changeMonth } from '../../actions/index';

import "./style.scss";

const Navigation = () => {
  const monthNumber = useSelector(state => state.monthNumber); 
  const dispatch = useDispatch();

  const monthNames = [
    "Styczen",
    "Luty",
    "Marzec",
    "Kwiecien",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpien",
    "Wrzesien",
    "Pazdziernik",
    "Listopad",
    "Grudzien"
  ]

  const currentDate = new Date();

  const [month, setMonth] = useState(currentDate.getMonth());

  function getMonthNumber(currentMonthNumber) {
    if (currentMonthNumber >= 0) {
      return currentMonthNumber % 12;
    } else {
      return 12 + (currentMonthNumber % 12);
    }
  }

  function getCurrentMonthName(monthNumber) {
    const currentMonthNumber = getMonthNumber(monthNumber)
    return monthNames[currentMonthNumber];
  }

  return (
    <nav className="navigation">
      <div className="navigation__date-picker">
        <button
          className="navigation__prev"
          onClick={() => {
            setMonth(month - 1)
            dispatch(changeMonth(getMonthNumber(month-1)));
          }}
        >
          Prev
        </button>
        <span className="navigation__current">
          { getCurrentMonthName(monthNumber) }
        </span>
        <button
          className="navigation__next"
          onClick={() => {
            setMonth(month +1);
            dispatch(changeMonth(getMonthNumber(month+1)));
          }}
        >
          Next
        </button>
      </div>
    </nav>
  );
}

export default Navigation;