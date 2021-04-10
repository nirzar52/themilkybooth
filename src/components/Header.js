import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../images/logo_booth.png";
import facebookIcon from "../images/facebook.png";
import instagramIcon from "../images/instagram.png";
import youtubeIcon from "../images/youtube.png";

function Header(props) {
    function goToHome(e) {
        e.preventDefault();
        props.history.push("/");
    }

    return (
        <div className="Header">
            <header className="top-bar" id="main-menu">
                <section className="grid-container">
                    <section className="grid-x top-container">
                        <section className="top-bar-left logo">
                            <a onClick={goToHome}>
                                <img
                                    src={logo}
                                    alt="The Milky Booth"
                                />
                            </a>
                        </section>
                        <section className="top-bar-right">
                            <ul className="social-menu">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={facebookIcon}
                                            alt="facebook"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={instagramIcon}
                                            alt="instagram"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={youtubeIcon}
                                            alt="youtube"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>
            </header>
        </div>
    );
}

export default withRouter(Header);
