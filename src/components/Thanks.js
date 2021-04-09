import React from "react";

function Home(props) {
    return (
        <div className="Home">
            Thanks { props.firstName}!
            Hey { props.lastName}!
        </div>
    );
}

export default Home;
