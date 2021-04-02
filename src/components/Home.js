import React from "react";

function Home() {
    return (
        <div className="Home">
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
            <section className="about">
                <section className="grid-container">
                    <h1 className="text-center">About Us</h1>
                    <section className="about-content text-center">
                        <p>Our dairy is committed to the health and wellness of Canadians, we offer a wide range of milk and dairy products, cultured products, cheese products.  As proud supporters of the Canadian dairy industry and its farmers, it’s our mission to provide Canadians with nutritious, high-quality products they’ll love.  Consumers are at the heart of what we do. 
                        </p>
                        <p>The aim is to enhance this offering with the client-made meme and virtual sticker enhanced photos.  That’s how we’re committed to strengthening communities across the country, and to continue making a significant contribution to the Canadian economy.
                        </p>
                    </section>
                </section>
            </section>
            <section className="how-it-works">
                <section className="grid-container">
                    <h1 className="text-center">How it Works?</h1>
                    <section className="grid-x grid-padding-x how-it-work-content">
                        <section className="cell large-5 small-12 left-work">
                            <img src="images/framePic.png" />
                            <div className="picText">
                                <p>You are the luckiest one of the week congratulations!</p>
                            </div>
                        </section>
                        <section className="cell large-7 small-12 right-work">
                            <section className=" grid-x grid-padding-x steps">
                                <section className="cell large-6 small-12">
                                    <h4>Allow webcam to capture a snapshot</h4>
                                    <p>Allow use webcam on your private virtual photo booth link on the web browser of your computer, tablet or mobile phone.</p>
                                </section>
                                <section className="cell large-6 small-12">
                                    <section className=" grid-x grid-padding-x">
                                        <section className="cell large-3 small-12">
                                            <hr className="stepLine" />
                                        </section>
                                        <section className="cell large-8 small-12">
                                            <div id="circle">
                                                <img src="../images/step1.png" className="step" />
                                            </div>
                                        </section>
                                    </section>
                                </section>
                            </section>
                            <section className=" grid-x grid-padding-x steps">
                                <section className="cell large-6 small-12">
                                    <h4>Taking photos</h4>
                                    <p>Tap the button “Capture” to take a photo with the devices.</p>
                                </section>
                                <section className="cell large-6 small-12">
                                    <section className=" grid-x grid-padding-x">
                                        <section className="cell large-3 small-12">
                                            <hr className="stepLine" />
                                        </section>
                                        <section className="cell large-8 small-12">
                                            <div id="circle">
                                                <img src="../images/step2.png" className="step" />
                                            </div>
                                        </section>
                                    </section>
                                </section>
                            </section>
                            <section className=" grid-x grid-padding-x steps">
                                <section className="cell large-6 small-12">
                                    <h4>Choosing filter and stickers </h4>
                                    <p>Edit with filters and add funny stickers effects to make the photo look awesome.</p>
                                </section>
                                <section className="cell large-6 small-12">
                                    <section className=" grid-x grid-padding-x">
                                        <section className="cell large-3 small-12">
                                            <hr className="stepLine" />
                                        </section>
                                        <section className="cell large-8 small-12">
                                            <div id="circle">
                                                <img src="../images/step3.png" className="step" />
                                            </div>
                                        </section>
                                    </section>
                                </section>
                            </section>
                            <section className=" grid-x grid-padding-x steps">
                                <section className="cell large-6 small-12">
                                    <h4>View and share</h4>
                                    <p>View your beautiful photos with custom designs and share them with friends and family.</p>
                                </section>
                                <section className="cell large-6 small-12">
                                    <section className=" grid-x grid-padding-x">
                                        <section className="cell large-3 small-12">
                                            <hr className="stepLine" />
                                        </section>
                                        <section className="cell large-8 small-12">
                                            <div id="circle">
                                                <img src="images/step4.png" className="step" />
                                            </div>
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section> 
            </section>
            <section className="grid-container join-contest">
                <section className="grid-x grid-padding-x">
                    <section className="cell large-12 small-12 text-center">
                        <h1>Are you exicted to join the content?</h1>
                        <a href="contest-form.html" className="button contest-btn" id="contestButton">Start contest</a>
                    </section>
                </section>
            </section>
        </div>
    );
}

export default Home;
