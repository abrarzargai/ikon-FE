import React, { Component } from 'react'
import './index.css'
export default class Bestofferbanner extends Component {
    render() {
        return (
            <div>
                <div className="section145">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-title-tt">
                                    <div className="main-title-left">
                                        <span>Offers</span>
                                        <h2>Best Values</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/1.png" alt />
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/2.png" alt />
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="#" className="best-offer-item offr-none">
                                    <img src="img/best-offers/4.png" alt />
                                    
                                </a>
                            </div> 
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
