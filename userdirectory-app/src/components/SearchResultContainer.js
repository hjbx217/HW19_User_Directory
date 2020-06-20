import React from "react";

class SearchResultContainer extends Component {
    state = {
        result: [],
        filter: "",
        filterBy: "lastName",
        currentSort: "default",
        sortField: ""

    };
    componentDidMount() {
        this.loadUsers();
    }
   
}

    