import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ToDoCard({title, bodyText, id}){
    return (
        <Card
            bg="dark"
            text="white"
            border="light"
            style={{marginBottom: "50px", marginLeft: "20px"}}
        >
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {bodyText}
                </Card.Text>
                <Link to={`/todo/${id}`} style={{all: 'unset'}}>
                    <Button variant='primary'>Go to ToDo</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}