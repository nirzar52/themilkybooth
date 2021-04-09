import React from "react";

function Footer(props) {
    function goToTerms(e) {
        e.preventDefault();
        props.history.push("/terms");
    }
    return (
        <div className="Footer">
            <footer className="footer">
                <section className="grid-container">
                    <section className="grid-x grid-padding-x">
                        <section className="cell large-6 small-12 text-left">
                            <p>The Milky Booth &copy; All rights reserved - 2021.</p>
                        </section>
                        <section className="cell large-6 small-12 text-right">
                            <a className="footer-links" onClick={goToTerms}>
                                Terms and Conditions
                            </a>
                        </section>
                    </section>
                </section>
            </footer>
        </div>
    );
}

export default Footer;
