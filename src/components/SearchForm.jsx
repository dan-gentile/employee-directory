import React from "react";

export default function SearchForm(props) {
  return (
    <div className="search-form">
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.filterEmployees}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for employee"
            id="search"
          />
        </div>
      </form>
    </div>
  );
}
