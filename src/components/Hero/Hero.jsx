import React, { Component, useRef } from "react";
import Slider from "react-slick";
import { Search } from "../Search/Search";
import { SimpleDiv } from "./hero.style";
import "./heroCarusel.css";
export default class HeroCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <SimpleDiv className="hero_box">
        <SimpleDiv className="hero_carousel_box">
          <Slider {...settings}>
            <SimpleDiv className="hero_carousel">
              <h2 className="hero_carousel_title" id="hd">
                Temuriylar <br /> davri adabiyoti
              </h2>
            </SimpleDiv>
            <SimpleDiv className="hero_carousel">
              <h2 className="hero_carousel_title">Jadid <br /> davri adabiyoti</h2>
            </SimpleDiv>
            <SimpleDiv className="hero_carousel">
              <h2 className="hero_carousel_title">Sovet <br /> davri  adabiyoti</h2>
            </SimpleDiv>
            <SimpleDiv className="hero_carousel">
              <h2 className="hero_carousel_title">
                Mustaqillik <br /> davri adabiyoti
              </h2>
            </SimpleDiv>
          </Slider>
        </SimpleDiv>
      </SimpleDiv>
    );
  }
}
