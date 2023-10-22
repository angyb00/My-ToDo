import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export default function ToDoCard(){
    return (
        <Card
            bg="dark"
            text="white"
            border="light"
            style={{marginBottom: "50px"
        }}
        >
            <Card.Header>My header</Card.Header>
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is the body's text where some information will go...
                </Card.Text>
                <Button variant="primary">Go to To-Do</Button>
            </Card.Body>
        </Card>
    )
}