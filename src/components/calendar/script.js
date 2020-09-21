import React from "react";
import { monthLengths } from "./config.js";
import { connect } from "react-redux";
import CalendarDay from "../calendar-day/script.js";
import CalendarHeadings from "../calendar-headings/script";

import "./style.scss";

const CALENDAR_CELL_COUNT = 35;

function Calendar(props) {
  const firstMonthDayNumber = new Date(
    Date.UTC(2020, props.monthNumber, 1)
  ).getDay();

  getDaysNumbers();

  function getCalendarViewList() {
    return getDaysNumbers().map((item) => (
      <CalendarDay dayNumber={item}></CalendarDay>
    ));
  }

  function getDaysNumbers() {
    const monthLenght = {
      prev: getMonthLenght(props.monthNumber - 1),
      current: getMonthLenght(props.monthNumber)
    };

    const daysNumbers = [];

    const firstPrevMonthDay = monthLenght.prev - firstMonthDayNumber + 1;

    for (let i = firstPrevMonthDay; i < monthLenght.prev; i++) {
      daysNumbers.push(i);
    }

    for (let i = 1; i <= monthLenght.current; i++) {
      daysNumbers.push(i);
    }

    for (let i = 1; daysNumbers.length < CALENDAR_CELL_COUNT; i++) {
      daysNumbers.push(i);
    }

    return daysNumbers;
  }

  function getMonthLenght() {
    return monthLengths[props.monthNumber];
  }

  return (
    <main className="calendar">
      <CalendarHeadings></CalendarHeadings>
      {getCalendarViewList()}
    </main>
  );
}

const mapStateToProps = state => {
  return {
    monthNumber: state.monthNumber
  }
}

export default connect(mapStateToProps)(Calendar);
