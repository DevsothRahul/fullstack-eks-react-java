import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import './css/ViewEmployeeComponent.css'; // Import the CSS file

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            employee: {},
        };
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            this.setState({ employee: res.data });
        });
    }

    render() {
        return (
            <div className="view-employee-container">
                <div className="card">
                    <h3 className="text-center">Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label className="label">First Name:</label>
                            <div className="value">{this.state.employee.firstName}</div>
                        </div>
                        <div className="row">
                            <label className="label">Last Name:</label>
                            <div className="value">{this.state.employee.lastName}</div>
                        </div>
                        <div className="row">
                            <label className="label">Email ID:</label>
                            <div className="value">{this.state.employee.emailId}</div>
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="back-button" onClick={() => this.props.history.push('/employees')}>Back to Employee List</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;
