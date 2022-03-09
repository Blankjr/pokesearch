import { useState } from "react";
import logo from "../icons/ball.svg";
import "../css/App.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Poke_table from "./Poke_table.jsx";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>PokeSearch</h1>
            </header>
            <Poke_table></Poke_table>
        </div>
    );
}

export default App;
