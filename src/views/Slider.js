import React, { Component } from "react";
import Slider from "react-slick";
import sliderImg1 from "../images/slider1.png";
import sliderImg2 from "../images/slider2.jpg";
import sliderImg3 from "../images/slider3.jpg";
import sliderImg4 from "../images/slider4.png";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: !0,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 4500,
            draggable: false,
            arrows: false
        };
        return (
            <section className="main-banner hero-text">
                <Slider className="hero" {...settings}>
                    <div className="hero-slide">
                        <img alt="Whole milk" className="img-responsive cover" src={sliderImg1} />
                        <div className="header-content  slide-content">
                            <h1 className="mb-4">Whole milk</h1>  
                            <p>At 3.25% milk fat, this velvety-smooth barista favorite tastes lighter than
                                cream but more full-bodied than skim milk.</p>
                        </div>
                    </div>
                    
                    <div className="hero-slide">
                        <img alt="Salted butter" className="img-responsive cover" src={sliderImg2} />
                        <div className="header-content  slide-content">
                            <h1 className="mb-4">Salted butter</h1>  
                            <p>Also known as churned butter, this is the traditional butter, which is made by
                                churning pasteurized cream and then salted.</p>  
                        </div>
                    </div>
                    
                    <div className="hero-slide">
                        <img alt="Stirred yogurt" className="img-responsive cover" src={sliderImg3} />
                        <div className="header-content  slide-content">
                            <h1 className="mb-4"> Stirred yogurt</h1>  
                            <p>Perfect to enjoy on its own or stirred into smoothies and desserts, this
                                even-textured yogurt does the trick any time of day.</p>
                        </div>
                    </div>

                    <div className="hero-slide">
                        <img alt="Fresh cheese" className="img-responsive cover" src={sliderImg4} />
                        <div className="header-content  slide-content">
                            <h1 className="mb-4"> Fresh cheese</h1>  
                            <p>Whether you’re referring to its fresh flavor or the way it’s made, this
                                light-tasting and delicate variety that includes the likes of Ricotta and Mascarpone is a total
                                palate-pleaser.</p>
                        </div>
                    </div>
                </Slider>
            </section>
        );
    }
}