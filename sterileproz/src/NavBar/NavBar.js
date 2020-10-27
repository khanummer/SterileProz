import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <div className>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor: "#5294e2"}}>
                <a className="navbar-brand" href="/">
                    <img src="../../imgs/SterileProz.png" width="230" height="100" alt="" loading="lazy"/>

                    </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/" style={{fontSize: "2rem"}}>Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/aboutus" style={{fontSize: "2rem"}}>About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#Offers" style={{fontSize: "2rem"}}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact" style={{fontSize: "2rem"}}>Contact</a>
                    </li>

                    </ul>
                </div>
                </nav>

            </div>

        )
    }
}

export default NavBar;