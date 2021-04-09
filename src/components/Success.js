import React from "react";
import confirmIcon from "../images/true.png";

function Successful() {
    return (
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
                                            <h2>Congratulations!</h2>
                                        </section>
                                        <section className="cell confirmation">
                                            <p>
                                                You are successfully registered
                                                for the contest!
                                            </p>
                                        </section>
                                        <section className="cell confirmation">
                                            <a href="./index.html">
                                                <section className="button">
                                                    Continue
                                                </section>
                                            </a>
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
    )
}