import React from "react";
import Slider from "./Slider";
import About from "./About";
import Startcontest from "./Startcontest";
import Howitworks from "./Howitworks";

function Home() {
    return (
        <div className="Home">
            <Slider></Slider>
            <About></About>
            <Howitworks></Howitworks>
            <Startcontest></Startcontest>
        </div>
    )
}

export default Home;
