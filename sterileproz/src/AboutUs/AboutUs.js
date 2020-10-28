import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {
    render() {
        return(
            <div className="home">

                <div className="container fill">
                    <div className="row">
                    <div className="jumbotron mt-5" style={{backgroundColor: "#7c818c"}}>
                        <h1 className="display-4">About Us</h1>
                        <p className="lead">
                        We at Sterile Pro take pride in keeping environments sterile free and work around the clock to ensure we do just that. WIth our 3 step sterilization process, we guarantee a sterile environment free of any virus or bacteria. We want to ensure our customers are 100% satisfied and safe. Our products eliminate all viruses and bacteria from Covid-19, Influenza (The Flu), SARS, Pseudomonas, MRSA and much more! Our 3 step process is approved by the CDC, hospitals and used in all labs all across the country. This method is the only way that ensures complete and total elimination of viruses and bacteria. What is this 3 step process?
                        </p>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default AboutUs;