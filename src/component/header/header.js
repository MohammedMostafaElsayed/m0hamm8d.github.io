import { Link, NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";




export default function Header() {
    const counter = useSelector(state=>state.counter.initial)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid position-relative">
                <h3>Product App</h3>



                <div className="collapse navbar-collapse position-absolute top-0 end-0" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className="nav-link"
                                style={({ isActive }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "orange" : "black",
                                    };
                                }}
                            >
                                home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/login"
                                className="nav-link"
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "orange" : "black",
                                    };
                                }}
                            >
                                login
                            </NavLink>


                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/regester"
                                className="nav-link"
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "orange" : "black",
                                    };
                                }}
                            >
                                Register
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/slaes-detail"
                                className="nav-link"
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isActive ? "orange" : "black",
                                    };
                                }}
                            >
                                <div className="d-flex me-5">
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "50px", height: "40px" }} fill="currentColor" className="bi bi-cart4 " viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />

                                </svg>
                        
                                        <span className=" translate-middle badge rounded-pill bg-danger" style={{ width: "40px", height: "20px" }}>
                                            {counter}
                                            
                                        </span>
                                        </div>
                                    
                            </NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav >
    );
}