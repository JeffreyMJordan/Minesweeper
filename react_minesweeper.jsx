import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/game";

class Root extends React.Component{

    render(){
        return (
            <Game/>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root/>, document.getElementById('main'));
});