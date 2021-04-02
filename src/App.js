import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

import { Grid, Cell } from "react-foundation";
import "foundation-sites/dist/css/foundation.min.css";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Form from "./components/Form";
import Terms from "./components/Terms";
import Photobooth from "./components/Photobooth";
import Thanks from "./components/Thanks";

function App() {

    const [setState] = useState("");

    const firstNameChange = (e) => {
        this.setState({ firstName: e.target.value });
    };

    const lastNameChange = (e) => {
        this.setState({ lastName: e.target.value });
    };
    
    const dateOfBirthChange = (e) => {
        this.setState({ dateOfBirth: e.target.value });
    };
    
    const emailIdChange = (e) => {
        this.setState({ emailId: e.target.value });
    };
    
    const phoneNumChange = (e) => {
        this.setState({ phoneNum: e.target.value });
    };
    
    const homeAddressChange = (e) => {
        this.setState({ homeAddress: e.target.value });
    };
    
    const cityChange = (e) => {
        this.setState({ homeAddress: e.target.value });
    };
    
    const postalCodeChange = (e) => {
        this.setState({ postalCode: e.target.value });
    };
    
    const termsAndConditionsChange = (e) => {
        this.setState({ termsAndConditions: e.target.value });
    };
    
    const guardianFirstNameChange = (e) => {
        this.setState({ guardianFirstName: e.target.value });
    };
    
    const guardianLastNameChange = (e) => {
        this.setState({ guardianLastName: e.target.value });
    };
    
    const guardianEmailIdChange = (e) => {
        this.setState({ guardianEmailId: e.target.value });
    };
    
    const guardianPhoneNumChange = (e) => {
        this.setState({ guardianPhoneNum: e.target.value });
    };

    function handleLogin() {
        console.log("First: " + this.state.firstName);
        console.log("Last: " + this.state.lastName);
    }
    
    
    return (
        <>
            <Header />
            <Router>
                <div className="App">
                    <div className="grid-basics-example">
                        <Grid className="display">
                            <Cell small={6} large={3}><Link to="/">Home</Link></Cell>
                            <Cell small={6} large={3}><Link to="/form">Form</Link></Cell>
                            <Cell small={6} large={3}><Link to="/terms">Terms Of Use</Link></Cell>
                            <Cell small={6} large={3}><Link to="/photobooth">Photobooth</Link></Cell>
                        </Grid>
                    </div>

                    <Switch>
                        <Route exact path="/" children={ <Form handleChange={(e) => handleChange(e)} /> } />
                        <Route path="/thanks" children={<Thanks namer={firstName, lastName} />} />
                        <Route path="/terms" component={Terms} />
                        <Route path="/photobooth" component={Photobooth} />
                    </Switch>
                </div>
            </Router>
            <Footer />
        </>
    );
}

export default App;
