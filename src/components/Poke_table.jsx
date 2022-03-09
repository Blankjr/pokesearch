import { useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import DATA from "../dataset.js";
import Details from "./Details.jsx";

function Poke_table() {
    const [selected_Pokemon, setSelected_Pokemon] = useState(1);
    function showDetails(index) {
        setSelected_Pokemon(index);
        scrollToTop();
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            <Details data={DATA[selected_Pokemon]}></Details>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name [DE]</th>
                        <th>Name [EN]</th>
                        <th>Typ 1</th>
                        <th>Type 2</th>
                        <th>Fang-Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {DATA.map((pokemon, i) => (
                        <tr key={i} onClick={() => showDetails(i)}>
                            <td>{pokemon.german_name}</td>
                            <td>{pokemon.name}</td>
                            <td>{pokemon.type_1}</td>
                            <td>{pokemon.type_2}</td>
                            <td>{pokemon.catch_rate}</td>
                        </tr>
                    ))}
                    <tr>
                        <td>{DATA[0].german_name}</td>
                        <td>{DATA[0].name}</td>
                        <td>{DATA[0].type_1}</td>
                        <td>{DATA[0].type_2}</td>
                        <td>{DATA[0].catch_rate}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Poke_table;
