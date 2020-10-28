import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div className="home">
           
            {/* Auto Play Video */}
           

            <div className="container" style={{height: "100%"}}>

            <div className="p">
              <video autoPlay muted controls playsinline id="myVideo">
                <source src="../../imgs/sterile24-Final copy.mp4" type="video/mp4"></source>
              </video>
            </div>
                <div className="row">
                    <div className="jumbotron mx-auto text-center" style={{backgroundColor: "#7c818c"}}	>
                        <h1 className="display-4">Highly Trained Specialists</h1>
                        <p className="lead" style={{color: "#383c4a	"}}>
                            Founded By A Doctor, Our Cleaners are Fully Trained In Hospital Level Cleaning Techniques,
                            Guaranteed To Be The Best In The Industry, We Strive To Ensure Your Home is Sanitized 
                            And Covid Free! 
                        </p>
                    </div>
                </div>
                
                <div className="row text-center">

                    <div className="col pb-4" >
                        <div className="card mx-auto" style={{width: "14rem"}}>
                        <img src="../../imgs/clean-1.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                <h5 className="card-title">Residental Covid-19 Sanitation</h5>
                                {/* <p className="card-text">Click Here</p> */}
                                {/* <a href="/" className="btn btn-primary">Click Here</a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col pb-4">
                        <div className="card mx-auto" style={{width: "14rem"}}>
                        <img src="../../imgs/clean-2.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                <h5 className="card-title">Commercial Covid-19 Sanitation</h5>
                                {/* <p className="card-text">Click Here</p> */}
                                {/* <a href="/" className="btn btn-primary">Click Here</a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col pb-4">
                        <div className="card mx-auto" style={{width: "14rem"}}>
                        <img src="../../imgs/clean-3.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                <h5 className="card-title">Office Covid-19 Sanitaion</h5>
                                {/* <p className="card-text">Click Here</p> */}
                                {/* <a href="/" className="btn btn-primary">Click Here</a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col pb-4">
                        <div className="card mx-auto" style={{width: "14rem"}}>
                        <img src="../../imgs/clean-4.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                <h5 className="card-title">Industrial Covid-19 Sanitation</h5>
                                {/* <p className="card-text">Click Here</p> */}
                                {/* <a href="/" className="btn btn-primary">Click Here</a> */}
                            </div>
                        </div> 
                    </div>

                </div>
                

                <div className="row pb-2 text-center">
                    <div className="jumbotron mx-auto" style={{backgroundColor: "#7c818c"}}>
                            <h1 className="display-4">CDC And FDA Approved!</h1>
                            <p className="lead" style={{color: "#383c4a	"}}>"CDC Medical Cleaning Approved Methods for Hospitals Used."</p>
                    </div>
                </div>

                <div className="row pt-2 mx-auto" style={{color: "#7c818c"}} id="Offers">
                    <h1>SterileProz Offers Many Kinds of Services We Sterilize :</h1>
                </div>

                <div className="row pb-2 mx-auto"> 
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"  style={{backgroundColor: "#383c4a", color: "#5294e2"}}>Residental Areas and Apartments</li>
                        <li className="list-group-item"  style={{backgroundColor: "#383c4a", color: "#5294e2"}}>Buisness and Public Apartments</li>
                        <li className="list-group-item"  style={{backgroundColor: "#383c4a", color: "#5294e2"}}>Nursing Homes</li>
                        <li className="list-group-item"  style={{backgroundColor: "#383c4a", color: "#5294e2"}}>Warehouses</li>
                        <li className="list-group-item"  style={{backgroundColor: "#383c4a", color: "#5294e2"}}>Schools and Universities</li>
                        <li className="list-group-item"  style={{backgroundColor: "#383c4a", color: "#5294e2"}}>Daycares</li>
                        <li className="list-group-item"  style={{backgroundColor: "#383c4a", color: "#5294e2"}}>Fitness Centers and Gyms</li>
                        <li className="list-group-item"  style={{backgroundColor: "#383c4a", color: "#5294e2"}}>Studios</li>
                        <li className="list-group-item"  style={{backgroundColor: "#383c4a", color: "#5294e2"}}>Automobiles</li>
                        <li className="list-group-item"  style={{backgroundColor: "#383c4a", color: "#5294e2"}}>Libraries</li>
                        <li className="list-group-item"  style={{backgroundColor: "#383c4a", color: "#5294e2"}}>Restauraunts</li>
                        <li className="list-group-item"  style={{backgroundColor: "#383c4a", color: "#5294e2"}}>Commercial Buildings</li>
                        <li className="list-group-item"  style={{backgroundColor: "#383c4a", color: "#5294e2"}}>Grocery Stores</li>
                    </ul>
                </div>

                <div className="row pb-2" style={{color: "#7c818c"}}>
                    <h1>Our Services</h1>
                </div>

                <div className="row pb-2" style={{color: "#5294e2"}}>
                    <ul class="list-unstyled">
                        <li class="media">
                            <img src="../../imgs/house.jpg" class="mr-3" alt="..."/>
                            <div class="media-body">
                            <h5 class="mt-0 mb-1">Regular House Cleaning</h5>
                            Up to 2 Hours
                            <a href="mailto:sterilepro24@gmail.com?subject=Regular%20House%20Cleaning&body=Hello,%20I%20would%20like%20to%20inqure%20about%20a%20Regular%20House%20Cleaning,%20My%20Contact%20Info%20Is" className="btn btn-dark ml-2">Book an Appointment</a>

                            </div>
                        </li>
                        <li class="media my-4">
                            <img src="../../imgs/deep-cleaning.jpg" class="mr-3" alt="..."/>
                            <div class="media-body">
                            <h5 class="mt-0 mb-1">Heavy Duty / Deep Cleaning</h5>
                            Up to 4 Hours
                            <a href="mailto:sterilepro24@gmail.com?subject=Heavy%20Duty%20/%20Deep%20Cleaning&body=Hello,%20I%20would%20like%20to%20inqure%20about%20a%20Heavy%20Duty%20/%20Deep%20Cleaning%20My%20Contact%20Info%20Is" className="btn btn-dark ml-2">Book an Appointment</a>

                            </div>
                        </li>
                        <li class="media my-4">
                            <img src="../../imgs/moveout.jpg" class="mr-3" alt="..."/>
                            <div class="media-body">
                            <h5 class="mt-0 mb-1">Move Out or Move In Cleaning</h5>
                            Up to 5 Hours
                            <a href="mailto:sterilepro24@gmail.com?subject=Move%20Out%20or%20Move%20In%20Cleaning&body=Hello,%20I%20would%20like%20to%20inqure%20about%20a%20Move%20In%20or%20Move%20In%20Cleaning,%20My%20Contact%20Info%20Is" className="btn btn-dark ml-2">Book an Appointment</a>

                            </div>
                        </li>
                        <li class="media">
                            <img src="../../imgs/phone-call.jpg" class="mr-3" alt="..."/>
                            <div class="media-body">
                            <h5 class="mt-0 mb-1">Free Quote Callback</h5>
                            20 Minutes
                            <a href="mailto:sterilepro24@gmail.com?subject=Free%20Quote%20Callback&body=Hello,%20I%20would%20like%20to%20inqure%20about%20a%20Free%20Quote%20Callback,%20My%20Contact%20Info%20Is" className="btn btn-dark ml-2">Book an Appointment</a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="row">
                        <div className="col pt-4">
                            <div className="card mx-auto" style={{width: "13rem"}}>
                            <img src="../../imgs/facebook.jpg" className="card-img-top" alt="..." style={{width: "5rem", height: "5rem"}}/>
                                <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                    <h5 className="card-title">Facebook</h5>
                                    <a href="https://www.facebook.com/sterilepro24/" className="btn btn-primary">Click Here</a>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-4">
                            <div className="card mx-auto" style={{width: "13rem"}}>
                            <img src="../../imgs/instagram.png" className="card-img-top" alt="..." style={{width: "5rem", height: "5rem"}}/>
                                <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                    <h5 className="card-title">Instagram</h5>
                                   <a href="https://www.instagram.com/sterilepro24/" className="btn btn-primary">Click Here</a>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-4">
                            <div className="card mx-auto" style={{width: "13rem"}}>
                            <img src="../../imgs/twitter.png" className="card-img-top" alt="..." style={{width: "5rem", height: "5rem"}}/>
                                <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                    <h5 className="card-title">Twitter</h5>
                                    <a href="https://twitter.com/sterilepro24" className="btn btn-primary">Click Here</a>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-4">
                            <div className="card mx-auto" style={{width: "13rem"}}>
                            <img src="../../imgs/youtube.png" className="card-img-top" alt="..." style={{width: "5rem", height: "5rem"}}/>
                                <div className="card-body" style={{backgroundColor: "#7c818c"}}>
                                    <h5 className="card-title">Youtube</h5>
                                    <a href="https://www.youtube.com/channel/UC0pJ8R7OSlLelhWUTpWCu7g" className="btn btn-primary">Click Here</a>
                                </div>
                            </div>
                        </div>
                    </div>

                  
            </div>

        </div>

        )
    }
}

export default Home;