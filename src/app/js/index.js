import { render } from "react-dom";
import React from "react";

const containerEl = document.getElementById("app");

class App extends React.Component {
    render () {
        return <p> Hello React!</p>;
    }
}

render(<App/>, containerEl);