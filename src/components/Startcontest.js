import React from "react";
import { withRouter } from "react-router-dom";


function Startcontest(props) {
    function goToForm(e) {
        e.preventDefault();
        props.history.push("/form");
    }

    return (
        <section className="grid-container join-contest">
            <section className="grid-x grid-padding-x">
                <section className="cell large-12 small-12 text-center">
                    <h1>Are you exicted to join the content?</h1>
                    <a onClick={goToForm} className="button contest-btn" id="contestButton">Start Contest</a>
                </section>
            </section>
        </section>
    )
}
export default withRouter(Startcontest);