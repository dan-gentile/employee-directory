import React, { Component } from "react";
import EmployeeCard from "../components/EmployeeCard";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";

export default class EmployeeContainer extends Component {
  state = {
    result: {},
    initialResult: {},
    search: "",
  };

  componentDidMount() {
    this.addEmployees();
  }

  addEmployees = () => {
    API.search()
      .then((res) =>
        this.setState({
          result: res.data.results,
          initialResult: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  filterEmployees = (event) => {
    const { name, value } = event.target;
    if (event.target.value) {
      const filteredEmployees = this.state.result.filter((result) => {
        return (
          result.name.first
            .toLowerCase()
            .search(event.target.value.toLowerCase()) !== -1
        );
      });
      this.setState({ result: filteredEmployees, search: event.target.value });
    } else {
      this.setState({ result: this.state.initialResult, search: "" });
    }
  };

  sortEmployees = () => {
    const sortedEmployees = this.state.result.sort((a, b) =>
      a.dob.age > b.dob.age ? 1 : b.dob.age > a.dob.age ? -1 : 0
    );
    this.setState({ sortedEmployees: sortedEmployees });
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  // };

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
          filterEmployees={this.filterEmployees}
        />
      </>
    );
  }
}
