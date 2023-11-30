import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import '../root/signin.css'
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { SaveUserToFirestore } from '../FirebaseUtils/SaveUserFirestore';
import { useNavigate } from 'react-router';
import { setDoc, doc } from 'firebase/firestore';

export default function SignUp(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    async function createUserAccount(){
        const { user } = await createUserWithEmailAndPassword(auth, email, password);

        await setDoc(doc(db, "Users", user.uid), {
            first_name: firstName,
            last_name: lastName,
            email: email
        });
        navigate('/home', { state: { firstName: firstName, lastName: lastName, uid: user.uid } } );
    }

    function handleSignUp(){
        const passwordNotMatching = "Passwords don't match";
        if(password !== confirmPassword){
            alert(passwordNotMatching);
            return
        }
        createUserAccount();
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
                        <Form.Control
                            type="name"
                            placeholder='John'
                            className='form-input'
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='margin-form-util'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder='Doe'
                            className='form-input'
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='margin-form-util'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder='name@example.com'
                            className='form-input'
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='margin-form-util'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className='margin-form-util'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                    </Form.Group>
                </Form>
            </div>
            <div className='main-button'>
                <Button onClick={handleSignUp}>Signup</Button>
            </div>
        </div>
    )
}