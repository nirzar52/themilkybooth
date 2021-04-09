import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import About from "../components/About";
import Startcontest from "../components/Startcontest";
import Howitworks from "../components/Howitworks";
function Home() {
    return (
        <div className="Home">
            <Header/>
            <Slider></Slider>
            <About></About>
            <Howitworks></Howitworks>
            <Startcontest></Startcontest>
            <Footer/>
        </div>
    );
}

export default Home;