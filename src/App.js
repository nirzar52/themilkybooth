import React, { useState } from "react";
import Home from "./routes/Home";
import Terms from "./routes/Terms";
import Photobooth from "./routes/Photobooth";
import Form from "./routes/Form";
import Thanks from "./routes/Thanks";
import Winner from "./routes/Winner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "foundation-sites/dist/css/foundation.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function App() {
    const [namer, setNamer] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
        setNamer(e.target.value);
    };

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/form" children={<Form handleChange={(e) => handleChange(e)} />} />
                    <Route path="/terms" component={Terms} />
                    <Route path="/photobooth" component={Photobooth} />
                    <Route path="/thanks" children={<Thanks namer={namer} />} />
                    <Route path="/winner" component={Winner} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;