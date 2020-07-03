import React, { Component } from "react";
import API from "../utils/API";
import Employees from "../components/EmployeeCard";
import SearchForm from "../components/SearchForm";

//Class Component

class Home extends Component {
    state = {
        employees: [{}],
        match: false,
        matchCount: 0,
        filteredEmployees: [{}],
        sortOrder: "ASC",
        selectedHeaderIndex: 0
    };
    // When the component mounts, load the next users to be displayed

    componentDidMount() {
        this.loadUsers();
    }
    loadUsers = () => {
        API.getRandomUsers()
            .then(res =>
                this.setState({
                    employees: res.data.results,
                    filteredEmployees: res.data.results

                })
            ).then(() => {
                console.log(this.state.employees);
            })
            .catch(err => console.log(err));
    };
    //filter function
    filteredEmployee = (e) => {
        const search = e.target.value //search passing into the form
        console.log(search);
        const filteredUser = this.state.employees.filter(item => {
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(search.toLowerCase()) !== -1;
        })
        this.setState({ filteredEmployees: filteredUser });
        console.log(this.state.filteredEmployees)
    }

    //comparator is taking each record & sorting them 
    ascComparator = (row1, row2) => {
        row1[this.state.selectedHeaderIndex].localeCompare(
            row2[this.state.selectedHeaderIndex]
        );
    }
    descComparator = (row1, row2) => {
        row2[this.state.selectedHeaderIndex].localeCompare(
            row1[this.state.selectedHeaderIndex]
        )
    }

    flipSortDirection = () => this.state.sortDirection === "asc" ? "desc" : "asc";



handleSort = (name) => {
    if (this.state.sortDirection === "desc") {
        this.flipSortDirection()
    } else {
        this.flipSortDirection()
    }
   
    var sortedEmployees = this.state.filteredEmployees.sort((a, b) => a.localeCompare(b))

    this.setState({
        filteredEmployees: sortedEmployees
    })
}


render() {
    return (
        <div>
            <SearchForm handleInputChange={this.filteredEmployee}></SearchForm>
            <Employees users={this.state.filteredEmployees} handleSort={this.handleSort}></Employees>
        </div>

    )
}
}



export default Home;
