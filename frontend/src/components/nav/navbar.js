import React from "react";
import { Link } from "react-router-dom";
import UserNotificationsContainer from "../ui_components/user_notifications";

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.handleClickSignup = this.handleClickSignup.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
        this.handleClickLogo = this.handleClickLogo.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout()
        this.props.history.push("/");
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                document.querySelector(".navbar-section").className = "navbar-section container glow";
            }
            else {
                document.querySelector(".navbar-section").className = "navbar-section container";
            }
        })
    }

    handleClickSignup() {
        if (this.props.location.pathname === "/register") {
            this.props.history.replace("/register");
        }
        else {
            this.props.history.push("/register");
        }
    }

    handleClickLogin() {
        if (this.props.location.pathname === "/login") {
            this.props.history.replace("/login");
        }
        else {
            this.props.history.push("/login");
        }
    }

    handleClickLogo() {
        if (this.props.location.pathname === "/") {
            this.props.history.replace("/");
        }
        else {
            this.props.history.push("/");
        }
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="nav-link-div">

                    <UserNotificationsContainer />
                    <div className="nav-link-profile-drop">
                        <div className="nav-link-profile-img-div">
                            <svg className="nav-link-profile-img bi bi-person"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                        </div>

                        <div className="nav-dropdown-content">
                            <Link className="nav-drop-link" to="/dashboard">
                                Dashboard
                            </Link>
                            <button className="nav-drop-link"
                                onClick={this.logoutUser}>Logout</button>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="nav-link-div">
                    <button className="nav-link"
                        onClick={this.handleClickSignup}>Signup</button>
                    <button className="nav-link"
                        onClick={this.handleClickLogin}>Login</button>
                </div>
            );
        }
    }

    render() {
        return (
            <section className="navbar-section container">
                <button className="logo"
                    onClick={this.handleClickLogo}>CIPHER</button>
                {this.getLinks()}
            </section>
        );
    }
}

export default NavBar;