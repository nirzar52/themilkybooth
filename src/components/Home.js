import React from "react";
import Slider from "../views/Slider";
import About from "../views/About";
import Startcontest from "../views/Startcontest";
import Howitworks from "../views/Howitworks";
function Home() {
    return (
        <div className="Home">
            <Slider></Slider>
            <About></About>
            <Howitworks></Howitworks>
            <Startcontest></Startcontest>
        </div>
    );
}

export default Home;