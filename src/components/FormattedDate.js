import React from "react";

function FormattedDate(props) {
  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let currentDate = props.date.getDate();
  let month = props.date.toLocaleString("default", { month: "short" });
  let year = props.date.getFullYear();

  return (
    <div>
      <div>
        Last update: {day} {hours}:{minutes}{" "}
      </div>
      <div>{currentDate} {month} {year}</div>
    </div>
  );
}

export default FormattedDate;
