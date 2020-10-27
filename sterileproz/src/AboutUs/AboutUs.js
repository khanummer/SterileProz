import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {
    render() {
        return(
            <div className="home">

                <div className="container">
                    <div className="row">
                    <div className="jumbotron" style={{backgroundColor: "#7c818c"}}>
                        <h1 className="display-4">About Us</h1>
                        <p className="lead">
                            Founded By A Doctor, Our Cleaners are Fully Trained In Hospital Level Cleaning Techniques,
                            Guaranteed To Be The Best In The Industry, We Strive To Ensure Your Home is Sanitized 
                            And Covid Free! 
                        </p>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default AboutUs;