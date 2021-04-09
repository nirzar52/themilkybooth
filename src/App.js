import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Grid, Cell } from "react-foundation";
import "foundation-sites/dist/css/foundation.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import NameForm from "./components/NameForm";
import Terms from "./components/Terms";
import Photobooth from "./components/Photobooth";
import Thanks from "./components/Thanks";

import './App.css';

function App() {
    const [namer, setNamer] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
        setNamer(e.target.value);
    };

    return (
        <>
            <Header />
            <Router>
                <div className="App">
                    <div className="grid-basics-example">
                        <Grid className="display text-center">
                            <Cell small={6} large={3}><Link to="/">Home</Link></Cell>
                            <Cell small={6} large={3}><Link to="/form">Form</Link></Cell>
                            <Cell small={6} large={3}><Link to="/terms">Terms Of Use</Link></Cell>
                            <Cell small={6} large={3}><Link to="/photobooth">Photobooth</Link></Cell>
                        </Grid>
                    </div>

                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route path="/form" children={<NameForm handleChange={(e) => handleChange(e)} />} />
                        <Route path="/terms" component={Terms} />
                        <Route path="/photobooth" component={Photobooth} />
                        <Route path="/thanks" component={Thanks} />
                    </Switch>
                </div>
            </Router>
            <Footer />
        </>
    );
}

export default App;