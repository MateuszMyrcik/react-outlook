import React, { Fragment } from "react";

function CalendarHeadings(props) {
  function getWeekDays(locale) {
    var baseDate = new Date(Date.UTC(2017, 0, 2));
    var weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(baseDate.toLocaleDateString(locale, { weekday: "long" }));
      baseDate.setDate(baseDate.getDate() + 1);
    }
    return weekDays;
  }

  function getWeekDaysItems() {
    const weekDays = getWeekDays("en");
    return weekDays.map((item) => {
      return <div key={item} className="calendar-heading">{item}</div>;
    });
  }

  return <Fragment> {getWeekDaysItems()} </Fragment>;
}

export default CalendarHeadings;
