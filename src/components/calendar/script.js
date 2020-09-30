import React, { useState } from 'react';
import { openForm as formOpened } from '../../actions/index';
import { monthLengths } from './config.js';
import { useSelector, useDispatch } from 'react-redux';
import CalendarDay from '../calendar-day/script.js';
import CalendarHeadings from '../calendar-headings/script';


import "./style.scss";

const CALENDAR_CELL_COUNT = 35;

function Calendar() {
  const monthNumber = useSelector(state => state.monthNumber)
  const dispatch = useDispatch();
  const firstMonthDayNumber = new Date(
    Date.UTC(2020, monthNumber, 1)
  ).getDay();

  const [isFormOpen, setFormState] = useState(false);

  function openForm(day, month) {
    setFormState(!isFormOpen);
    console.log(`Form is opened on date : ${day} ${month}`)
    console.log(day. month)
    dispatch(formOpened(day,month));
  }

  function getDayId(dayNumber, monthNumber) {
    let dayId = '';
    dayId += dayNumber <= 9 ? `0${dayNumber}` : dayNumber;
    dayId += monthNumber <= 9 ? `0${monthNumber}` : monthNumber;

    return dayId;
  }

  function getCalendarViewList() {
    return getDaysNumbers().map((item) => (
      <CalendarDay 
        key={getDayId(item.dayNumber, item.monthNumber)} 
        date={item}
        onFormIconClick={openForm}
      >
      </CalendarDay>
    ));
  }

  function getDaysNumbers() {
    const monthLength = {
      prev: getMonthLength(monthNumber - 1),
      current: getMonthLength(monthNumber),
    };

    const daysNumbers = [];

    const firstPrevMonthDay = monthLength.prev - firstMonthDayNumber + 1;

    for (let i = firstPrevMonthDay; i < monthLength.prev; i++) {
      daysNumbers.push({
          monthNumber: monthNumber - 1,
          dayNumber: i
        });
    }

    for (let i = 1; i <= monthLength.current; i++) {
      daysNumbers.push({
        monthNumber: monthNumber,
        dayNumber: i
      });
    }

    for (let i = 1; daysNumbers.length < CALENDAR_CELL_COUNT; i++) {
      daysNumbers.push({
        monthNumber: monthNumber + 1,
        dayNumber: i
      });
    }

    return daysNumbers;
  }

  function getMonthLength() {
    return monthLengths[monthNumber];
  }

  return (
    <main className="calendar">
      <CalendarHeadings></CalendarHeadings>
      {getCalendarViewList()}{/* TODO: MOVE it as CalendarBody */}
    </main>
  );
}

export default Calendar;
