import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import services from "../../../../services/GetProductDetails";
import { addToCart } from "../../../../../store/actions/cartActions";
import CircularProgress from "@material-ui/core/CircularProgress";
class Topsavers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productlist: [],
      isloaded: false,
    };
  }
  async componentDidMount() {
    let list = await services.getAllProducts();
    if (list) {
      this.setState({ productlist: list.product, isloaded: true });
    }
  }
  render() {
    let list = this.state.productlist?.products || [];
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
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    console.log("==>", this.state.productlist);
    return (
      <div>
        {/* New Item slider */}
        <section className="product-items-slider section-padding">
          <div className="container" id="header-category-bk">
            <div className="section-header">
              <span>For You</span>
              <h5 className="heading-design-h5">
                {/* <span className="badge badge-primary">20% OFF</span> */}
                <Link
                  to={{
                    pathname: `/shop/${this.state.productlist?.slug || ""}`,
                    state: list,
                  }}
                >
                  <span className="float-right text-secondary">View All</span>
                </Link>
              </h5>
            </div>
            <Slider {...settings}>
              {!this.state.isloaded ? (
                <div className="progress-bar-bk">
                  <CircularProgress color="secondary" />
                </div>
              ) : (
                this.state?.productlist?.map((row, index) => (
                  <div key={index} className="item">
                    asds
                    <div className="product">
                      <Link
                        to={{
                          pathname: `/p/${row.slug}/${row.id}`,
                          state: row,
                        }}
                      >
                        <div className="product-header">
                          <span className="badge badge-success">
                            {row.discountPer}% OFF
                          </span>
                          <img
                            className="img-fluid"
                            src={"http://localhost:4000/uploads/" + row.photo}
                            onError={(e) => {
                              e.target.src = "img/not-found.jpg";
                            }}
                            alt="product"
                          />
                          {/* <span className="veg text-success mdi mdi-circle" /> */}
                        </div>
                        <div className="product-body">
                          <h5>{row.name}</h5>
                          <h6>
                            <strong>
                              <span className="mdi mdi-approval" /> Available in
                            </strong>{" "}
                            - {row.unitSize}
                          </h6>
                        </div>
                      </Link>
                      <div className="product-footer">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm float-right"
                          onClick={() => this.props.addToCart(row)}
                        >
                          <i className="mdi mdi-cart-outline" /> Add To Cart
                        </button>
                        <p className="offer-price mb-0">
                          Rs. {row.price} <i className="mdi mdi-tag-outline" />
                          <br />
                          <span className="regular-price">
                            Rs. {row.netPrice}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </Slider>
          </div>
        </section>

        {/* End New item slider */}
      </div>
    );
  }
}
export default connect(null, { addToCart })(Topsavers);
