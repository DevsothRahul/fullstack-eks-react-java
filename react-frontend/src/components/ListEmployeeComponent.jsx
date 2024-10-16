import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import './css/ListEmployeeComponent.css'; // Optional: Import your CSS file

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        };
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }

    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
    }

    editEmployee(id) {
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center" style={{ color: 'white' }}>Employees List</h2>
                <br />
                <div className="row">
                    <table className="table table-striped table-bordered" style={{ backgroundColor: '#343a40' }}>
                        <thead>
                            <tr>
                                <th style={{ color: 'white' }}>Employee First Name</th>
                                <th style={{ color: 'white' }}>Employee Last Name</th>
                                <th style={{ color: 'white' }}>Employee Email Id</th>
                                <th style={{ color: 'white' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(employee =>
                                    <tr key={employee.id}>
                                        <td style={{ color: 'white' }}>{employee.firstName}</td>
                                        <td style={{ color: 'white' }}>{employee.lastName}</td>
                                        <td style={{ color: 'white' }}>{employee.emailId}</td>
                                        <td>
                                            <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(employee.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
