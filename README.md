# Employee-Directory

## React App

![Contents](https://img.shields.io/github/languages/top/dan-gentile/employee-directory)
![Last-Commit](https://img.shields.io/github/last-commit/dan-gentile/employee-directory)
![License](https://img.shields.io/github/license/dan-gentile/employee-directory)
​

### Table of contents

- [Title](#title)
- [General info](#general-info)
- [Technologies](#Technologies)
- [Deployment](#Deployment)
- [Screen Shots](#Screen-shots)
- [Code Snippets](#Code-snippets)
- [Questions](#questions)
- [Authors](#Authors)

### General info

This app allows a user to be able to view my entire employee directory at once so that I have quick access to their information. Search by Name and sort by age, cause why not!
This app is built using React, seed employees are pull from the randomuser.me API using axios.

Web Link: <https://reactdirectory2105.herokuapp.com/>
​

### Technologies

Project is created with:

- [React JS](https://reactjs.org/)
- [axios](https://www.npmjs.com/package/axios)

### Deployment

If running locally on your machine, make sure you have Node.js installed on your machine. As well as Mongo installed and copy the schema file in the root folder to build your database. In the root folder while in your terminal run `npm start` the application should be available on your browser at localhost:3000.

If running from browser just go to the link
<https://reactdirectory2105.herokuapp.com/>

### Screen shots

App page

<img width="854" alt="Screen Shot 2020-11-05 at 7 46 23 PM" src="https://user-images.githubusercontent.com/68626350/98323824-a5fcc780-1f9f-11eb-8896-c0dc224ce29e.png">

### Code snippets

Filter Employees and set State

```
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
      this.setState({ result: filteredEmployees, [name]: value });
    } else {
      this.setState({ result: this.state.initialResult, [name]: "" });
    }
  };
```

## Questions

If you have any questions please create an issue.

### Authors

- [Dan Gentile](https://github.com/dan-gentile)
  ​

## License

This license is [MIT](https://github.com/dan-gentile/employee-directory/blob/main/LICENSE)
