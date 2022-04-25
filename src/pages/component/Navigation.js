import React from "react";
import auth from "./../../approutes/Authentication";
import { Link, useNavigate } from "react-router-dom";
export default function App() {
    let navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link fw-bold" onClick={() => {
                                auth.logout(() => {
                                    navigate("/");
                                });
                            }} href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}  
