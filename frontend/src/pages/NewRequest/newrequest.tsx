import React from 'react';
import {
    Container,
    EtherTIContainer,
    EtherTILabel,
    Form,
    FormHeader,
    FormHeaderTitle,
    SubmitButton,
    TextInput,
} from './newrequest.style';

const NewRequest: React.FC = () => {
    return (
        <Container>
            <FormHeader>
                <FormHeaderTitle>New Request</FormHeaderTitle>
            </FormHeader>
            <Form>
                <TextInput type="text" placeholder="Title" />
                <TextInput type="text" placeholder="Description" />
                <TextInput type="text" placeholder="Receiver Address" />
                <EtherTIContainer>
                    <TextInput type="text" placeholder="Amount" />
                    <EtherTILabel>ETH</EtherTILabel>
                </EtherTIContainer>
                <SubmitButton type="submit" name="Submit" />
            </Form>
        </Container>
    );
};

export default NewRequest;
