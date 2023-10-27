import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import '../root/signin.css'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export default function SignUp(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function createUserAccount(){
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    

    return (
        <div>
            <section>
                <h1>
                    Sign Up
                </h1>
            </section>
            <div className='form-container'>
                <Form>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" placeholder='John' className='form-input'/>
                    </Form.Group>
                    <Form.Group className='margin-form-util'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="name" placeholder='Doe' className='form-input'/>
                    </Form.Group>
                    <Form.Group className='margin-form-util'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder='name@example.com' className='form-input'/>
                    </Form.Group>
                    <Form.Group className='margin-form-util'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Password'/>
                    </Form.Group>
                    <Form.Group className='margin-form-util'>
                        <Form.Label> Confirm Password</Form.Label>
                        <Form.Control type='password' placeholder='Password'/>
                    </Form.Group>
                </Form>
            </div>
            <div className='signin-button'>
                <Button onClick={createUserAccount}>Signup</Button>
            </div>
        </div>
    )
}