import React, { Component } from "react";
import Slider from "react-slick"; 
// import { baseUrl } from "./config";
// const img1 = "https://firebasestorage.googleapis.com/v0/b/rough-2f8bc.appspot.com/o/2.jpeg?alt=media&token=872e69ed-8e0e-4957-b012-fff47b283554";
// const img2 = "https://firebasestorage.googleapis.com/v0/b/rough-2f8bc.appspot.com/o/4.jpeg?alt=media&token=29743e4e-2436-4b77-bde0-a0fa586c6e6b";
// const img3 = "https://firebasestorage.googleapis.com/v0/b/rough-2f8bc.appspot.com/o/7.jpeg?alt=media&token=08a5a29b-4315-451e-bd8d-484566aff0bc";

// const arr = ["https://firebasestorage.googleapis.com/v0/b/rough-2f8bc.appspot.com/o/7.jpeg?alt=media&token=08a5a29b-4315-451e-bd8d-484566aff0bc",
// "https://i.ytimg.com/vi/ONEWIER5MxE/maxresdefault.jpg",
// "https://i.ytimg.com/vi/ONEWIER5MxE/maxresdefault.jpg"]

export default class ProductDisplay extends Component {
  render() {
    var images = this.props.imagesArray;
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={images[i]} style = {{maxWidth : '100%', maxHeight : '100%'}}/>
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
        {
          this.props.imagesArray.map((item, i)=> {
            return(
          <div key = {i}>
            <img src={item} style = {{maxWidth : '100%', maxHeight : '100%'}}/>
          </div>
            )
          })
        }
          {/* <div>
            <img src={this.props.imagesArray[1]} style = {{maxWidth : '100%', maxHeight : '100%'}}/>
          </div>
          <div>
            <img src={this.props.imagesArray[2]} style = {{maxWidth : '100%', maxHeight : '100%'}}/>
          </div> */}
        </Slider>
      </div>
    );
  }
}   