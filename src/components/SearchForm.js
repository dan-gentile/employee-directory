import React from "react";

export default function SearchForm(props) {
  return (
    <div className="search-form">
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for employee"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
