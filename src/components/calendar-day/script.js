import "./style.scss";
import React from 'react'

function CalendarDay(props) {
  return (
    <div className="calendar-day">
      <span className="calendar-day__number">{props.dayNumber}</span>
      <div className="calendar-day__content">
        <span className="calendar-day__item">Posprzatac pokoj</span>
      </div>
    </div>
  )
}

export default CalendarDay;
