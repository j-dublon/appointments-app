import React from "react";

function ApptList(props) {
  const { appts } = props;
  return (
    <ul>
      {appts.map((appt) => {
        return (
          <li key={appt.description}>
            {appt.time}, {appt.description}
          </li>
        );
      })}
    </ul>
  );
}

export default ApptList;

// <p>Appointment Time: {`hello ${name}} </p>
