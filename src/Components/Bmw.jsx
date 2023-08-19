import React from 'react'
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";

import ScrollToTop from "react-scroll-to-top";
import Data from "./Data";



const Bmw = (props) => {

    const { addItem } = useCart()
    const add = () => {
        addItem(props.item)
    }


    return (
        <div>





            {/* card 1 */}
            <div className="container d-flex mt-4 border-0 " >
                <div className="card">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={props.img} className='img-fluid mt-5 align-center' alt="" />

                        </div>
                        <div className="col-md-8">
                            <p className=' ml-auto mr-2 mt-1 mx-3 w-20 d-flex justify-content-end' >⭐4.6/5 |108 Ratings</p>
                            <h4 className='card-title mt-1 '>{props.title}  </h4>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sunt. Lorem ipsum dolor sit amet. </p>
                            <p>{props.specs}</p>
                            <h6>{props.price}</h6>
                            <p>Avg Ex-Showroom Price</p>
                            <Link to='/cont' onClick={add} className="btn btn-primary mb-2">Book Now</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* card 2 */}

            {/* <div className="container d-flex mt-5 border-0">
                <div className="card">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={bmwz4} className='img-fluid mt-5 align-center' alt="" />

                        </div>
                        <div className="col-md-8">
                            <p className=' ml-auto mr-2 mt-1 mx-3 w-20 d-flex justify-content-end'  >⭐4.9/5 |38 Ratings</p>
                            <h4 className='card-title mt-1 '>BMW Z4   </h4>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sunt. Lorem ipsum dolor sit amet. </p>
                            <p>5 Star Safety | 11-14 kmpl| 194-375 bhp</p>
                            <h6>₹ 71.82 Lakh</h6>
                            <p>Avg Ex-Showroom Price</p>
                            <button className="btn btn-primary mb-2">Book Now</button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* card 3 */}

            {/* <div className="container d-flex mt-5 mb-2 border-0">
                <div className="card">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={bmw5s} className='img-fluid mt-5 align-center' alt="" />

                        </div>
                        <div className="col-md-8">
                            <p className=' ml-auto mr-2 mt-1 mx-3 w-20 d-flex justify-content-end' >⭐4.4/5 |90 Ratings</p>
                            <h4 className='card-title mt-1 '>BMW 5 Series  </h4>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sunt. Lorem ipsum dolor sit amet. </p>
                            <p>5 Star Safety
                                |
                                14-20 kmpl
                                |
                                188-261 bhp</p>
                            <h6>₹ 64.49 Lakh</h6>
                            <p>Avg Ex-Showroom Price</p>
                            <button className="btn btn-primary mb-2">Book Now</button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* card4 */}
            {/* <div className="container d-flex mt-5 mb-2 border-0">
                <div className="card">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={bmwi4} className='img-fluid mt-5 align-center' alt="" />

                        </div>
                        <div className="col-md-8">
                            <p className=' ml-auto mr-2 mt-1 mx-3 w-20 d-flex justify-content-end' >⭐5/5 |108 Ratings</p>
                            <h4 className='card-title mt-1 '>BMW i4  </h4>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sunt. Lorem ipsum dolor sit amet. </p>
                            <p>5 Star Safety | 16-20 kmpl | 188-255 bhp</p>
                            <h6>₹ 69.90 Lakh</h6>
                            <p>Avg Ex-Showroom Price</p>
                            <button className="btn btn-primary mb-2">Book Now</button>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* card5 */}
            {/* <div className="container d-flex mt-5 mb-2 border-0">
                <div className="card">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={bmw7} className='img-fluid mt-5 align-center' alt="" />

                        </div>
                        <div className="col-md-8">
                            <p >⭐4.8/5 |38 Ratings</p>
                            <h4 className='card-title mt-1 '>BMW 7 Series  </h4>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sunt. Lorem ipsum dolor sit amet. </p>
                            <p>7-39 kmpl | 262-601 bhp</p>
                            <h6>₹ 1.42 Crore</h6>
                            <p>Avg Ex-Showroom Price</p>
                            <button className="btn btn-primary mb-2">Book Now</button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* card6 */}
            {/* <div className="container d-flex mt-5 mb-2 border-0">
                <div className="card">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={bmw8} className='img-fluid mt-5 align-center' alt="" />

                        </div>
                        <div className="col-md-8">
                            <p className=' ml-auto mr-2 mt-1 mx-3 w-20 d-flex justify-content-end' >⭐4.9/5 |200 Ratings</p>
                            <h4 className='card-title mt-1 '>BMW M8  </h4>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sunt. Lorem ipsum dolor sit amet. </p>
                            <p>6 kmpl | 591 bhp</p>
                            <h6>₹ 2.23 Crore </h6>
                            <p>Avg Ex-Showroom Price</p>
                            <button className="btn btn-primary mb-2">Book Now</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <ScrollToTop smooth color="#6f00ff" />







        </div >

    )
}

export default Bmw