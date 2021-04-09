import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Boothtitle from "../components/Boothtitle";
import Booth from "../components/Booth";
import Boothsteps from "../components/Boothsteps";

export const Photobooth = () => {


    return (
        <div>
            <Header/>
            <Boothtitle />
            <Booth />
            <Boothsteps />
            <Footer/>
        </div>
    )
}

export default Photobooth;