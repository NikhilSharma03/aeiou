import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Form,
    FormHeader,
    FormHeaderTitle,
    SignupText,
    SubmitButton,
    TextInput,
} from './login.style';

const Login = () => {
    return (
        <Container>
            <FormHeader>
                <FormHeaderTitle>Login</FormHeaderTitle>
            </FormHeader>
            <Form>
                <TextInput type="email" placeholder="Email" />
                <TextInput type="password" placeholder="Password" />
                <SignupText>
                    New to our platform?
                    <Link to="/signup"> Signup</Link>
                </SignupText>
                <SubmitButton type="submit" name="Submit" />
            </Form>
        </Container>
    );
};

export default Login;
