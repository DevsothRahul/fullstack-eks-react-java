import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/HeaderComponent.css'; // Optional: If you want to add specific styles for the header

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a href="/" className="navbar-brand">Employee Management App</a>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarNav" 
                            aria-controls="navbarNav" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/employees" className="nav-link">View Employees</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/add-employee/-1" className="nav-link">Add Employee</Link>
                                </li>
                                {/* Uncomment when UpdateEmployeeComponent is ready */}
                                {/* <li className="nav-item">
                                    <Link to="/update-employee/:id" className="nav-link">Update Employee</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;
