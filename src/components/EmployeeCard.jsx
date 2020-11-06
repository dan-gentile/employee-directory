import React from "react";

export default function EmployeeCard(props) {
  return (
    <div className="employee-card">
      <div className="image">
        <img src={props.picture} alt={(props.firstName, props.lastName)} />
      </div>
      <div className="details">
        <ul>
          <h3>
            {props.firstName} {props.lastName}
          </h3>
          <p>Cell: {props.cellPhone}</p>
          <p>Email: {props.email}</p>
          <p>Age: {props.age}</p>
        </ul>
      </div>
    </div>
  );
}
