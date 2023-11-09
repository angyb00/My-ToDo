import '../root/signin.css'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

export default function Settings(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const updateButtonPressed = () => {

    };

    return (
        <div>
            <section>
                <h1>
                    Settings
                </h1>
            </section>
            <div className='form-container'>
                <Form>
                    <Form.Group>
                        <Form.Label>Change First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder='name@example.com'
                            className='form-input'
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group style={{marginTop: '10px'}}>
                        <Form.Label>Change Last Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Password'
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </Form.Group>
                </Form>
            </div>
            <div className='main-button'>
                <Button onClick={updateButtonPressed}>Update Settings</Button>
            </div>
        </div>
    );

};