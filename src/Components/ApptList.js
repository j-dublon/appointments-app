import React from "react";

function ApptList(props) {
  const { appts, selectedDate } = props;

  const filteredAppts = Object.entries(appts).filter((appt) => {
    if (appt[0] === selectedDate) return true;
    return false;
  });
  return (
    <ul>
      {filteredAppts.map((appt, index) => {
        console.log(filteredAppts);
        console.log(appt);
        return (
          <li key={index}>
            {appt[1].time} {appt[1].description}
          </li>
        );
      })}
    </ul>
  );
}

export default ApptList;
