import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* Footer */}
                <section className="section-padding bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-truck-fast" />
                                    <h6>Free &amp; Next Day Delivery</h6>
                                
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-basket" />
                                    <h6>100% Satisfaction Guarantee</h6> 
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-tag-heart" />
                                    <h6>Great Daily Deals Discount</h6> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding footer bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <h4 className="mb-5 mt-0"><a className="logo" href="index.html">
                                <h3 style={{color:"black",fontWeight:"bolder"}}>IKON</h3>                                </a></h4>
                                <p className="mb-0"><a className="text-dark" href="#"><i className="mdi mdi-phone" /> +92 312 34 56 789 </a></p>
                                <p className="mb-0"><a className="text-dark" href="#"><i className="mdi mdi-cellphone-iphone" /> 12345 67890</a></p>
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">TOP CITIES </h6>
                                <ul>
                                    <li><a href="#">Islamabad</a></li>
                                    <li><a href="#">Karachi</a></li>
                                    <li><a href="#">Lahore</a></li>
                                    <li><a href="#">Peshawar</a></li> 
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">CATEGORIES</h6>
                                <ul>
                                    <li><a href="#">Mobiles</a></li>
                                    <li><a href="#">Tablets</a></li>
                                    <li><a href="#">Smart &amp; Watches</a></li>
                                    <li><a href="#">Wireless &amp; Earbuds</a></li>
                                    <li><a href="#">Laptop</a></li> 
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">ABOUT US</h6>
                                <ul>
                                    <li><a href="#">Company Information</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Store Location</a></li>
                                    <li><a href="#">Affillate Program</a></li>
                                    <li><a href="#">Copyright</a></li>
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-3 col-md-3">
                                <h6 className="mb-3">GET IN TOUCH</h6>
                                <div className="footer-social">
                                    <a className="btn-facebook" href="#"><i className="mdi mdi-facebook" /></a>
                                    <a className="btn-twitter" href="#"><i className="mdi mdi-twitter" /></a>
                                    <a className="btn-instagram" href="#"><i className="mdi mdi-instagram" /></a>
                                    <a className="btn-whatsapp" href="#"><i className="mdi mdi-whatsapp" /></a>
                                    <a className="btn-messenger" href="#"><i className="mdi mdi-facebook-messenger" /></a>
                                    <a className="btn-google" href="#"><i className="mdi mdi-google" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Footer */}
                {/* Copyright */}
                <section className="pt-4 pb-4 footer-bottom">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-sm-6">
                                <p className="mt-1 mb-0">© Copyright 2024 <strong className="text-dark">Ikon</strong>. All Rights Reserved<br />
                                    <small className="mt-0 mb-0">Made with <i className="mdi mdi-heart text-danger" /> by Ikon
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Copyright */}
            </div>
        )
    }
}
