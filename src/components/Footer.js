import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <section className="grid-container">
                <section className="grid-x grid-padding-x">
                    <section className="cell large-6 small-12 text-left">
                        <h4>&copy; All rights reserved - 2021</h4>
                    </section>
                    <section className="cell large-6 small-12 text-right">
                        <a className="footer-links" href="#">
                            <h4>Terms and Conditions</h4>
                        </a>
                    </section>
                </section>
            </section>
        </footer>
    );
}

export default Footer;
