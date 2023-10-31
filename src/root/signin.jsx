import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, redirect } from 'react-router-dom';
import './signin.css'

export default function Signin(){

    const signinPressed = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                redirect("")

            })

        .catch((error) => {
            alert("Wrong credentias");
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
                        <Form.Control type="email" placeholder='name@example.com' className='form-input'/>
                    </Form.Group>
                    <Form.Group style={{marginTop: '10px'}}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Password'/>
                    </Form.Group>
                </Form>
            </div>
            <div className='main-button'>
                <Button>Log In</Button>
            </div>
            <Link to={`signup`} className='main-button'>
                <Button>Sign Up</Button>
            </Link>
        </div>
    )
}