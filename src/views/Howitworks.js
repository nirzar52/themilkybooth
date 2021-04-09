import React from "react";
import homePhotoFrame from "../images/framePic.png";
import homeStep1 from "../images/step1.png";
import homeStep2 from "../images/step2.png";
import homeStep3 from "../images/step3.png";
import homeStep4 from "../images/step4.png";

export default function Howitworks() {
    return(
            <section className="how-it-works">
                <section className="grid-container">
                    <h1 className="text-center">How it Works?</h1>
                    <section className="grid-x grid-padding-x how-it-work-content">
                        <section className="cell large-5 small-12 left-work">
                            <div className="framePic">
                                <div>
                                <img src={homePhotoFrame} alt="frame" className="outer" />
                                </div>
                            </div>
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
                                                <img src={homeStep1} alt="Step1" className="step" />
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
                                                <img src={homeStep2} alt="Step2" className="step" />
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
                                                <img src={homeStep3} alt="Step3" className="step" />
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
                                                <img src={homeStep4} alt="Step4" className="step" />
                                            </div>
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section> 
            </section>
    )
}