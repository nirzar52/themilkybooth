import React from "react";
import Slider from "../components/Slider";
import About from "../components/About";
import Startcontest from "../components/Startcontest";
import Howitworks from "../components/Howitworks";
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