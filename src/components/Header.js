import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import Home from "./Home";
import Form from "./Form";
import TermsAndConditions from "./TermsAndConditions";
import Photobooth from "./Photobooth";

function Header() {
    return (
        <Router>
        <header className="top-bar" id="main-menu">
            <section className="grid-container">
                <section className="grid-x top-container">
                    <section className="top-bar-left logo">
                        <Link to="/"><img src="/images/logo_booth.png" alt="The Milky Booth"/></Link>
                        <Link to="/form">Form</Link>
                        <Link to="/photobooth">Form</Link>
                        <Link to="/terms">Terms And Conditions</Link>
                    </section>
                    <section className="top-bar-right">
                        <ul className="social-menu">
                            <li><a href="#"><img src="/images/facebook.png" alt="facebook" /></a></li>
                            <li><a href="#"><img src="/images/instagram.png" alt="instagram" /></a></li>
                            <li><a href="#"><img src="/images/youtube.png" alt="youtube" /></a></li>
                        </ul>
                    </section>
                </section>
            </section>
        </header>
        <Switch>
            <Route path="/"><Home/></Route>
            <Route path="/form"><Form/></Route>
            <Route path="/terms"><TermsAndConditions/></Route>
            <Route path="/photobooth"><Photobooth/></Route>
        </Switch>
        </Router>
    );
}

export default Header;
