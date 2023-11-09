import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './signin.css'
import { fetchUser } from '../FirebaseUtils/SaveUserFirestore';
import { useState } from 'react';

export default function Signin(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signinPressed = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                fetchUser(user.uid)
                    .then(res => {
                        navigate('/home', { state: { firstName: res.first_name, lastName: res.last_name, uid: user.uid } });
                    });
            })

        .catch((error) => {
            alert("Wrong credentials");
        });
    }

    return (
        <div>
            <section>
                <h1>
                    Sign In
                </h1>
            </section>
            <div className='form-container'>
                <Form>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder='name@example.com'
                            className='form-input'
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group style={{marginTop: '10px'}}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Form.Group>
                </Form>
            </div>
            <div className='main-button'>
                <Button onClick={signinPressed}>Log In</Button>
            </div>
            <Link to={`signup`} className='main-button'>
                <Button>Sign Up</Button>
            </Link>
        </div>
    )
}