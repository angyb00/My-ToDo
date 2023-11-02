import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ToDoCard({title, bodyText, id}){
    return (
        <Card
            bg="dark"
            text="white"
            border="light"
            style={{marginBottom: "50px"}}
        >
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {bodyText}
                </Card.Text>
                {/* <Button variant="primary">Go to To-Do</Button> */}
                <Link to={`/todo/${id}`}>Go to ToDo</Link>
            </Card.Body>
        </Card>
    )
}