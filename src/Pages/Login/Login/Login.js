import React from 'react';
import { Button, Form, } from 'react-bootstrap';




const Login = () => {






    return (
        <div style={{ marginTop: '150px' }} className=' d-flex'>
            <div className=' w-50 mt-3npm '>
                <h2 className=' text-primary mt-5'>facebook</h2>
                <h3>Facebook helps you connect and share with the people in your life.</h3>
            </div>
            <div>
                <div style={{ marginLeft: '100px', padding: '80px 40px', backgroundColor: 'whitesmoke ' }}>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                            <span style={{ textSizeAdjust: '100px' }} className=''>Log In</span>
                        </Button>
                    </Form>

                    <p > <a className=' text-primary pe-auto text-decoration-none' href="/">Forgotten password?</a> </p>
                    <div style={{ height: '1px' }} className='  bg-secondary'></div>
                    <button className='btn bg-success text-white pe-auto text-decoration-none mt-3'>Create New Account</button>
                </div>

            </div>

        </div >
    );
};

export default Login;