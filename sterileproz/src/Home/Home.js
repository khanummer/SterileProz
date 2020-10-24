import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return(
            <div>

            <div className="container">

                <div className="row">

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                        <img src="../../imgs/stock-image.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Free Consultation</h5>
                                {/* <p className="card-text">Click Here</p> */}
                                <a href="/" className="btn btn-primary">Click Here</a>
                            </div>
                        </div>
                    </div>
                
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                        <img src="../../imgs/stock-image.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">(909)-999-9999</h5>
                                <p className="card-text">Call Today!</p>
                            </div>
                        </div>
                    </div>

                </div>
                

                <div className="row align-items-center">

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                        <img src="../../imgs/stock-image.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Residental Covid-19 Sanitation</h5>
                                {/* <p className="card-text">Click Here</p> */}
                                {/* <a href="/" className="btn btn-primary">Click Here</a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                        <img src="../../imgs/stock-image.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Cleaning Sanitation Virus Elimination</h5>
                                {/* <p className="card-text">Click Here</p> */}
                                {/* <a href="/" className="btn btn-primary">Click Here</a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                        <img src="../../imgs/stock-image.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Commercial Covid-19 Sanitation</h5>
                                {/* <p className="card-text">Click Here</p> */}
                                {/* <a href="/" className="btn btn-primary">Click Here</a> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="../../imgs/stock-image.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Office Covid-19 Sanitaion</h5>
                                {/* <p className="card-text">Click Here</p> */}
                                {/* <a href="/" className="btn btn-primary">Click Here</a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                        <img src="../../imgs/stock-image.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Industrial Covid-19 Sanitation</h5>
                                {/* <p className="card-text">Click Here</p> */}
                                {/* <a href="/" className="btn btn-primary">Click Here</a> */}
                            </div>
                        </div> 
                    </div>

                </div>

                
                <div class="jumbotron">
                        <h1 class="display-4">CDC And FDA Approved!</h1>
                        <p class="lead">"CDC Medical Cleaning Approved Methods for Hospitals Used."</p>
                </div>


                <h1>SterileProz Offers Many Kinds of Services We Sterilize :</h1>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Residental Areas and Apartments</li>
                    <li class="list-group-item">Buisness and Public Apartments</li>
                    <li class="list-group-item">Nursing Homes</li>
                    <li class="list-group-item">Warehouses</li>
                    <li class="list-group-item">Schools and Universities</li>
                    <li class="list-group-item">Daycares</li>
                    <li class="list-group-item">Fitness Centers and Gyms</li>
                    <li class="list-group-item">Studios</li>
                    <li class="list-group-item">Automobiles</li>
                    <li class="list-group-item">Libraries</li>
                    <li class="list-group-item">Restauraunts</li>
                    <li class="list-group-item">Commercial Buildings</li>
                    <li class="list-group-item">Grocery Stores</li>
                </ul>

                <h1>To get a free quote or learn more, fill out the form below :</h1>


                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">First Name</label>
                        <input type="email" class="form-control" id="inputEmail4"/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Last Name</label>
                        <input type="password" class="form-control" id="inputPassword4"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Email</label>
                        <input type="text" class="form-control" id="inputAddress"/>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Phone Number</label>
                        <input type="text" class="form-control" id="inputAddress2"/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                        <label for="inputCity">Message</label>
                        <input type="text" class="form-control" id="inputCity"/>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Send</button>
                    </form>

                    <div class="jumbotron">
                        <h1 class="display-4">Highly Trained Specialists</h1>
                        <p class="lead">
                            Founded By A Doctor, Our Cleaners are Fully Trained In Hospital Level Cleaning Techniques,
                            Guaranteed To Be The Best In The Industry, We Strive To Ensure Your Home is Sanitized 
                            And Covid Free! 
                        </p>
                    </div>
                    
            </div>

        </div>

        )
    }
}

export default Home;