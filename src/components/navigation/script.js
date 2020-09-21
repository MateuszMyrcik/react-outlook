import { connect } from 'react-redux'
import React, { useState } from "react";
import "./style.scss";
import { changeMonth } from '../../actions/index';

const Navigation = (props) => {
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
            props.changeMonth(getMonthNumber(month-1));
          }}
        >
          Prev
        </button>
        <span className="navigation__current">
          { getCurrentMonthName(props.monthNumber) }
        </span>
        <button
          className="navigation__next"
          onClick={() => {
            setMonth(month +1);
            props.changeMonth(getMonthNumber(month+1));
          }}
        >
          Next
        </button>
      </div>
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    monthNumber: state.monthNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeMonth: (monthNumber) => dispatch(changeMonth(monthNumber))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);