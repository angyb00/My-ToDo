import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import '../root/signin.css'

export default function SignUp(){

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
                <Button>Signup</Button>
            </div>
        </div>
    )
}