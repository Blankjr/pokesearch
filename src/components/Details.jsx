import ListGroup from "react-bootstrap/ListGroup";
import "../css/Details.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Details(props) {
    let important_type_reactions = [];
    let info = props.data;
    Object.keys(info).forEach((element) => {
        if (element.includes("against") && info[element] != 1) {
            important_type_reactions.push({
                type: element.substring(8),
                factor: info[element],
            });
        }
    });
    return (
        <div>
            <h1>{info.german_name}</h1>
            <i>({info.name})</i>
            <p>
                {info.type_1} {info.type_2}
            </p>
            <ListGroup horizontal="sm" className="my-2 centeredFlexBox">
                {important_type_reactions.map((type, key) => (
                    <ListGroup.Item
                        key={key}
                        className={
                            type.factor > 1
                                ? "background-green"
                                : "background-red"
                        }
                    >
                        {type.type} {type.factor}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default Details;
