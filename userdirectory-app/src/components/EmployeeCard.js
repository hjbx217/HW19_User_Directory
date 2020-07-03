import React from "react";


function Employees({ users, handleSort }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => {handleSort(users)}}>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {users[0] !== undefined && users[0].name !== undefined ? (
                        users.map((employee, index) => {
                            return (
                                <tr key={index}>
                                    <td> {employee.name.last} </td>
                                    <td> {employee.phone} </td>
                                    <td> {employee.email} </td>
                                </tr>
                            )
                        }
                        )
                    ) : (<></>)}
                </tbody>
            </table>
        </div>
    )
}

export default Employees;