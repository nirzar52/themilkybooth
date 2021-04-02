import React from 'react'

function Photobooth() {
    return (
        <div className="Photobooth mb-0">
            <section className="callout term-title page-title">
                <section className="grid-container">
                    <h1 className="text-center small-text-left">Photo Booth</h1>
                </section>
            </section>
            <section className="about">
                <section className="grid-container text-center">
                    <section className=" grid-x grid-padding-x">
                        <section className="cell large-12 small-12">
                            <img src="../images/booth.png" />
                        </section>
                    </section>
                </section>
            </section>
            <section className="how-it-works">
                <section className="grid-container">
                    <h1 className="text-center">How it Works?</h1>
                    <section className="grid-x grid-padding-x how-it-work-content">
                        <section className="cell large-12 small-12 right-work">
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
                                            <hr className="stepLine"/>
                                        </section>
                                        <section className="cell large-8 small-12">
                                            <div id="circle">
                                                <img src="../images/step4.png" className="step" />
                                            </div>
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section> 
            </section>
        </div>
    )
}

export default Photobooth