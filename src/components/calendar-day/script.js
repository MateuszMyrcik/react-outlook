import "./style.scss";
import React from 'react'

function CalendarDay(props) {
  return (
    <div className="calendar-day">
      <span className="calendar-day__number">{props.date.dayNumber}</span>
      <div className="calendar-day__content">
        <div className="calendar-day__tasks-list"></div>
        <button className="calendar-day__add-task" onClick={() => {
          props.onFormIconClick(props.date.dayNumber, props.date.monthNumber)}}
        >Add new task</button>
      </div>
    </div>
  )
}

export default CalendarDay;
