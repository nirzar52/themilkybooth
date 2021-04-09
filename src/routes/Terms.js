import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Termstitle from '../components/Termstitle';
import Conditions from '../components/Conditions';

function Terms() {
    return (
        <div>
            <Header />
            <div className="Terms mb-50">
                <Termstitle></Termstitle>
                <Conditions></Conditions>
            </div>
            <Footer />
        </div>
    )
}

export default Terms;