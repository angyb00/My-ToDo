import '../root/signin.css'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { fetchUser } from '../FirebaseUtils/SaveUserFirestore';
import { useNavigate, useParams } from 'react-router';

export default function Settings(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const updateButtonPressed = () => {

    };

    const navigateToHome = () => {
        fetchUser(id)
            .then((res) => {
                navigate('/home', { state: { firstName: res.first_name, lastName: res.last_name, uid: id } });
            });
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
                            placeholder='First Name'
                            className='form-input'
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group style={{marginTop: '10px'}}>
                        <Form.Label>Change Last Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Last Name'
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </Form.Group>
                </Form>
            </div>
            <div className='main-button'>
                <Button onClick={updateButtonPressed}>Update Settings</Button>
            </div>
            <div className="main-button">
                <Button onClick={navigateToHome}>Go Home</Button>
            </div>
        </div>
    );

};