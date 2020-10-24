import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <div>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">SterileProz</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/aboutus">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact</a>
                    </li>
                    </ul>
                </div>
                </nav>

            </div>

        )
    }
}

export default NavBar;