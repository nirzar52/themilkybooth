import React from "react";

function Home(props) {
    return (
        <div className="Home">
            Thanks { props.namer }!
        </div>
    );
}

export default Home;
