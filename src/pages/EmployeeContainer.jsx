import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import SearchForm from "./SearchForm";
import API from "../utils/API";

export default class EmployeeContainer extends Component {
  state = {
    result: {},
    filteredEmployees: {},
    sortedEmployees: {},
    search: "",
  };

  componentDidMount() {
    this.addEmployees();
  }

  addEmployees = () => {
    API.search()
      .then((res) => this.setState({ result: res.data.results, search: "" }))
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    this.setState({ filteredEmployees: this.state.result });
  };

  filterEmployees = (event) => {
    const { name, value } = event.target;
    const filteredEmployees = this.state.result.filter((result) => {
      return (
        result.name.first
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ filteredEmployees: filteredEmployees, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  renderArray = (state) => {
    if (!state.result[0]) return null;
    if(state.result[0]) 
  };

  render() {
    return (
      <>
        <div className="employee-card-div">
          {!this.state.result[0]
            ? null
            : this.state.result.map((result) => {
                return (
                  <EmployeeCard
                    key={result.id.value}
                    firstName={result.name.first}
                    lastName={result.name.last}
                    email={result.email}
                    cellPhone={result.cell}
                    picture={result.picture.large}
                    age={result.dob.age}
                  />
                );
              })}
        </div>

        <SearchForm
          value={this.state.search}
          handleChange={this.handleChange}
          filterEmployees={this.filterEmployees}
        />
      </>
    );
  }
}
