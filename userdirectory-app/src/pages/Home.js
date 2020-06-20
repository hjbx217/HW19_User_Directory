import React, { Component } from "react";
import API from "../utils/API";
import Employees from "../components/EmployeeCard";

//Class Component

class Home extends Component {
    state = {
        employees: [{}],
        match: false,
        matchCount: 0
    };
    // When the component mounts, load the next users to be displayed
  
    componentDidMount() {
        this.loadUsers();
    }
    loadUsers = () => {
        API.getRandomUsers()
            .then(res =>
                this.setState({
                    employees: res.data.results
                })
            ).then(() => {
                console.log(this.state.employees);
            })
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <Employees users={this.state.employees}></Employees>
            </div>
        )
    }
}



export default Home;
