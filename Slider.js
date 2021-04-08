import React from "react";

export default function Slider() {
    return(

            <section className="main-banner hero-text">
                <div className="hero" data-arrows="true" data-autoplay="true">
                    
                    <div className="hero-slide">
                        <img alt="Whole milk" className="img-responsive cover" src="../images/slider1.png" />
                        <div className="header-content  slide-content">
                            <h1 className="mb-4">Whole milk</h1>  
                            <p>At 3.25% milk fat, this velvety-smooth barista favorite tastes lighter than
                                cream but more full-bodied than skim milk.</p>
                        </div>
                    </div>
                    
                    <div className="hero-slide">
                        <img alt="Salted butter" className="img-responsive cover" src="../images/slider2.jpg" />
                        <div className="header-content  slide-content">
                            <h1 className="mb-4">Salted butter</h1>  
                            <p>Also known as churned butter, this is the traditional butter, which is made by
                                churning pasteurized cream and then salted.</p>  
                        </div>
                    </div>
                    
                    <div className="hero-slide">
                        <img alt="Stirred yogurt" className="img-responsive cover" src="../images/slider3.jpg" />
                        <div className="header-content  slide-content">
                            <h1 className="mb-4"> Stirred yogurt</h1>  
                            <p>Perfect to enjoy on its own or stirred into smoothies and desserts, this
                                even-textured yogurt does the trick any time of day.</p>
                        </div>
                    </div>

                    <div className="hero-slide">
                        <img alt="Fresh cheese" className="img-responsive cover" src="../images/slider4.png" />
                        <div className="header-content  slide-content">
                            <h1 className="mb-4"> Fresh cheese</h1>  
                            <p>Whether you’re referring to its fresh flavor or the way it’s made, this
                                light-tasting and delicate variety that includes the likes of Ricotta and Mascarpone is a total
                                palate-pleaser.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }