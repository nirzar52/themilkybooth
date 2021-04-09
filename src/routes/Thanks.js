import React from "react";
import confirmIcon from "../images/true.png";

function Thanks(props) {
    return (
        <div className="thanks">
            <div className="successful">
                <p className="confirmBtn">
                    <button
                        className="button"
                        id="successRevealBtn"
                        data-open="successReveal"
                    >
                        Click Me
                    </button>
                </p>
                <section className="reveal" id="successReveal" data-reveal>
                    <section className="success-container">
                        <section className="grid-y grid-padding-y confirm-container">
                            <section className="confirm-svg">
                                <img
                                    src={confirmIcon}
                                    alt="Confirmation"
                                />
                            </section>
                            <section className="grid-x">
                                <section className="cell large-8 confirm-message">
                                    <section className="grid-y grid-padding-y text-center">
                                        <section className="cell confirmation">
                                            <h2>Congratulations, { props.namer}!</h2>
                                        </section>
                                        <section className="cell confirmation">
                                            <p>
                                                You are successfully registered
                                                for the contest!
                                            </p>
                                            <p>Now you have a chance to be a winner of the week by clicking photo using photobooth feature. Use different stickers and effects to increase the chance of winning.</p>
                                        </section>
                                        <section className="cell confirmation">
                                            <section className="button" to="/photobooth">
                                                Click Photo
                                            </section>
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <button
                            className="close-button"
                            data-close
                            aria-label="Close modal"
                            type="button"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default Thanks;
