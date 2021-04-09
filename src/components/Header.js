import React from "react";

function Header() {
    return (
        <div className="Header">
            <header className="top-bar" id="main-menu">
                <section className="grid-container">
                    <section className="grid-x top-container">
                        <section className="top-bar-left logo">
                            <a href="index.html">
                                <img
                                    src="images/logo_booth.png"
                                    alt="The Milky Booth"
                                />
                            </a>
                        </section>
                        <section className="top-bar-right">
                            <ul className="social-menu">
                                <li>
                                    <a href="#">
                                        <img
                                            src="images/facebook.png"
                                            alt="facebook"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="images/instagram.png"
                                            alt="instagram"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="images/youtube.png"
                                            alt="youtube"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>

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
                                    src="images/true.png"
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
            </header>
        </div>
    );
}

export default Header;
