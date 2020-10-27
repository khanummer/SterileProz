import React, { Component } from 'react';
import './ContactUs.css';

class ContactUs extends Component {
    render() {
        return(
            <div className="home">
                <div className="container" style={{height: "100%"}}>
                    <div className="row">
                        <div className="col pt-4">
                            <div className="card mx-auto" style={{width: "13rem"}}>
                            <img src="../../imgs/phone-icon.jpg" className="card-img-top" alt="..." style={{width: "5rem", height: "5rem"}}/>
                                <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                    <h5 className="card-title">(909) 667-1500</h5>
                                    {/* <a href="/" className="btn btn-primary">Click Here</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col pt-4">
                            <div className="card mx-auto" style={{width: "13rem"}}>
                            <img src="../../imgs/email-icon.jpg" className="card-img-top" alt="..." style={{width: "5rem", height: "5rem"}}/>
                                <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                    <h5 className="card-title">email@email.com</h5>
                                    {/* <a href="/" className="btn btn-primary">Click Here</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col pt-4">
                            <div className="card mx-auto" style={{width: "13rem"}}>
                            <img src="../../imgs/location-icon.jpg" className="card-img-top" alt="..." style={{width: "5rem", height: "5rem"}}/>
                                <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                    <h5 className="card-title">3200 Lincoln Street, Los Angeles, CA</h5>
                                    {/* <a href="/" className="btn btn-primary">Click Here</a> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col pt-4">
                            <div className="card mx-auto" style={{width: "13rem"}}>
                            <img src="../../imgs/facebook.jpg" className="card-img-top" alt="..." style={{width: "5rem", height: "5rem"}}/>
                                <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                    <h5 className="card-title">Facebook</h5>
                                    <a href="/" className="btn btn-primary">Click Here</a>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-4">
                            <div className="card mx-auto" style={{width: "13rem"}}>
                            <img src="../../imgs/instagram.png" className="card-img-top" alt="..." style={{width: "5rem", height: "5rem"}}/>
                                <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                    <h5 className="card-title">Instagram</h5>
                                    <a href="/" className="btn btn-primary">Click Here</a>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-4">
                            <div className="card mx-auto" style={{width: "13rem"}}>
                            <img src="../../imgs/twitter.png" className="card-img-top" alt="..." style={{width: "5rem", height: "5rem"}}/>
                                <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                    <h5 className="card-title">Twitter</h5>
                                    <a href="/" className="btn btn-primary">Click Here</a>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-4">
                            <div className="card mx-auto" style={{width: "13rem"}}>
                            <img src="../../imgs/youtube.png" className="card-img-top" alt="..." style={{width: "5rem", height: "5rem"}}/>
                                <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                    <h5 className="card-title">Youtube</h5>
                                    <a href="/" className="btn btn-primary">Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        )
    }
}

export default ContactUs;