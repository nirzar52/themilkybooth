import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Grid, Cell } from "react-foundation";
import "foundation-sites/dist/css/foundation.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NameForm from "./components/NameForm";

import Home from "./routes/Home";
import Terms from "./routes/Terms";
import Photobooth from "./routes/Photobooth";
import Form from "./routes/Form";
import Thanks from "./routes/Thanks";

import './App.css';

function App() {
    const [namer, setNamer] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
        setNamer(e.target.value);
    };

    return (
        <>
            <Router>
                <Header />
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
                        <Route path="/form" component={Form} />
                        <Route path="/terms" component={Terms} />
                        <Route path="/photobooth" component={Photobooth} />
                        <Route path="/thanks" component={Thanks} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </>
    );
}

export default App;