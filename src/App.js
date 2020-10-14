/* eslint-disable linebreak-style */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Lines } from "react-preloaders";
import StartMenu from "./Components/StartMenu/StartMenu";
import Game from "./Components/Game/Game";

function App() {
    // const [isStart, setStart] = useState(false);
    return (
        <Router>
            <div className="App">
                <Lines color={"rgb(14, 14, 14)"}/>
                <Route path="/" component={StartMenu} exact/>
                <Route path="/game" component={Game} exact/>
                {/* <Game /> */}
            </div>
        </Router>

    );
}

export default App;
