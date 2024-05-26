import React, { Component } from 'react'
import Slider from "react-slick";
export default class Topstample extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  initialSlide: 3
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
          const items = [
            {
                name: "ZTE Blade A52",
                url:"1.webp",
                price: "21,4900.00"
            },  
            {
                name: "LDNIO PW1003 10000mAh Universal Wireless Charging",
                url:"2.webp",
                price: "5,799.00"
            },  
            {
                name: "Spigen Galaxy S20 Ultra Liquid Crystal Clear Case",
                url:"3.webp",
                price: "2,199.00"
            },  
            {
                name: "Anker A2310H11 PowerDrive 2 - Without Cable",
                url:"4.webp",
                price: "2,799.00"
            },  
            {
                name: "Moshi Symbus Q Compact USB-C Dock with Wireless",
                url:"5.webp",
                price: "26,799.00"
            },  
        ]
        return (
          
            <div>
                 {/* New Item slider */}
                 <section className="product-items-slider section-padding">
                    <div className="container" id="header-category-bk">
                        <div className="section-header">
                            <span>For You</span>
                            <h5 className="heading-design-h5">Top Stample  {/* <span className="badge badge-primary">20% OFF</span> */}
                                <a className="float-right text-secondary" >View All</a>
                            </h5>
                        </div>
                        <Slider {...settings}>
                            {items?.map((item)=>(<>
                                <div className="item">
                                <div className="product">
                                    <a href="single.html">
                                        <div className="product-header">
                                            <span className="badge badge-success">50% OFF</span>
                                            <img className="img-fluid" src={`img/product/${item.url}`} alt="product" />
                                            <span className="veg text-success mdi mdi-circle" />
                                        </div>
                                        <div className="product-body">
                                            <h5>{item.name}</h5>
                                            <h6><strong><span className="mdi mdi-approval" /> Available</strong></h6>
                                        </div>
                                        <div className="product-footer">
                                            <button type="button" className="btn btn-secondary btn-sm float-right"><i className="mdi mdi-cart-outline" /> Add To Cart</button>
                                            <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline" /><br /><span className="regular-price">$800.99</span></p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            </>))}
                           
                           
                        </Slider>
                    </div>
                </section>
                {/* End New item slider */}
            </div>
        )
    }
}
