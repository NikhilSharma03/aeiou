import React from 'react';
import {
    Container,
    Form,
    FormHeader,
    FormHeaderTitle,
    LoginText,
    SubmitButton,
    TextInput,
} from './signup.style';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <Container>
            <FormHeader>
                <FormHeaderTitle>Signup</FormHeaderTitle>
            </FormHeader>
            <Form>
                <TextInput type="text" placeholder="Name" />
                <TextInput type="email" placeholder="Email" />
                <TextInput type="password" placeholder="Password" />
                <LoginText>
                    Already a user? <Link to="/login">Login</Link>
                </LoginText>
                <SubmitButton type="submit" name="Submit" />
            </Form>
        </Container>
    );
};

export default Signup;
