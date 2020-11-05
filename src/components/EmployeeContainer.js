import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import SearchForm from "./SearchForm";
import API from "../utils/API";

export default class EmployeeContainer extends Component {
  state = {
    result: {},
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

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchMovies(this.state.search);
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
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
      </>
    );
  }
}
