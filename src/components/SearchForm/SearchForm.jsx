import React from "react";
import "./searchform.css";

export default function SearchForm(props) {
  return (
    <div className="search-form">
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.filterEmployees}
          value={props.value}
          name="search"
          type="text"
          className="input-field"
          placeholder="Search for employee"
          id="search"
        />
      </div>
      <div className="sort-div">
        <label htmlFor="sort">Sort by Age</label>
        <input
          onChange={props.sortEmployees}
          onClick={props.handleChange}
          checked={props.isChecked}
          name="sort"
          type="checkbox"
          id="sort"
        />
      </div>
    </div>
  );
}
