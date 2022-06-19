import React, { useState } from 'react';
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
import { useParams } from 'react-router-dom';
import { onCreateRequest } from './../../redux/actions/contract';
import { useAppDispatch, useAppSelector } from './../../hooks/hooks';
import Web3 from 'web3';

const NewRequest: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [receiverAddress, setReceiverAddress] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const params = useParams();
    const campaignAddress = params.address;

    const dispatch = useAppDispatch();
    const userWalletAccount = useAppSelector(
        (state) => state.users.userWalletAccount
    );

    const createRequest = (
        campaignAddress,
        userAddress,
        title,
        desc,
        receiver,
        amount
    ) => {
        dispatch(
            onCreateRequest({
                campaignAddress,
                userAddress,
                title,
                desc,
                receiver,
                amount,
            })
        );
    };

    const onNewRequestSubmitHandler = (e) => {
        e.preventDefault();
        let amountToWei = Web3.utils.toWei(amount, 'ether');
        createRequest(
            campaignAddress,
            userWalletAccount,
            title,
            description,
            receiverAddress,
            amountToWei
        );
    };

    return (
        <Container>
            <FormHeader>
                <FormHeaderTitle>New Request</FormHeaderTitle>
            </FormHeader>
            <Form onSubmit={onNewRequestSubmitHandler}>
                <TextInput
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Title"
                />
                <TextInput
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Description"
                />
                <TextInput
                    onChange={(e) => setReceiverAddress(e.target.value)}
                    type="text"
                    placeholder="Receiver Address"
                />
                <EtherTIContainer>
                    <TextInput
                        onChange={(e) => setAmount(e.target.value)}
                        type="text"
                        placeholder="Amount"
                    />
                    <EtherTILabel>ETH</EtherTILabel>
                </EtherTIContainer>
                <SubmitButton type="submit" name="Submit" />
            </Form>
        </Container>
    );
};

export default NewRequest;
