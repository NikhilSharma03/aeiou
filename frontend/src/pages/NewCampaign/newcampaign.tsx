import React from 'react';
import {
    Container,
    Form,
    FormHeader,
    FormHeaderTitle,
    SubmitButton,
    TextInput,
} from './newcampaign.style';

const NewCampaign: React.FC = () => {
    return (
        <Container>
            <FormHeader>
                <FormHeaderTitle>New Campaign</FormHeaderTitle>
            </FormHeader>
            <Form>
                <TextInput type="email" placeholder="Email" />
                <TextInput type="password" placeholder="Password" />
                <SubmitButton type="submit" name="Submit" />
            </Form>
        </Container>
    );
};

export default NewCampaign;
