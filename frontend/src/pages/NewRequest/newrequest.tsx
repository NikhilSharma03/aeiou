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
import LoadingModal from '../../components/Modals/Loading/loading';
import ErrorModal from '../../components/Modals/Error/error';
import SuccessModal from '../../components/Modals/Success/success';
import {
    onClearContractError,
    onSetContractError,
    onResetComplete,
} from './../../redux/reducers/contract';

const NewRequest: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [receiverAddress, setReceiverAddress] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const params = useParams();
    const dispatch = useAppDispatch();
    const campaignAddress = params.address;
    const userWalletAccount = useAppSelector(
        (state) => state.users.userWalletAccount
    );
    const loading = useAppSelector((state) => state.contracts.loading);
    const error = useAppSelector((state) => state.contracts.error);
    const completed = useAppSelector((state) => state.contracts.completed);

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

    const clearError = () => dispatch(onClearContractError());
    const setError = (msg: string) => dispatch(onSetContractError(msg));
    const resetCompleted = () => dispatch(onResetComplete());

    const onNewRequestSubmitHandler = async (e) => {
        e.preventDefault();
        // Validation
        if (
            title.trim().length === 0 ||
            description.trim().length === 0 ||
            receiverAddress.trim().length === 0 ||
            amount.trim().length === 0
        ) {
            // Set Error
            setError('Invalid Input!!');
            return;
        }

        if (!Web3.utils.isAddress(receiverAddress)) {
            // Set Error
            setError('Invalid Address!!');
            return;
        }

        let amountToWei;
        try {
            amountToWei = Web3.utils.toWei(amount, 'ether');
        } catch (err) {
            setError('Please enter amount in number for amount!');
            return;
        }

        if (!userWalletAccount) {
            setError('Please connect metamask wallet to create request!!');
            return;
        }

        await createRequest(
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
            <ErrorModal
                content={error}
                showModal={!!error}
                closeModal={clearError}
            />
            <SuccessModal
                content={'Request Created Successfully!'}
                showModal={completed}
                closeModal={resetCompleted}
            />
            <LoadingModal showModal={loading} />
            <FormHeader>
                <FormHeaderTitle>New Request</FormHeaderTitle>
            </FormHeader>
            <Form onSubmit={onNewRequestSubmitHandler}>
                <TextInput
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Title"
                />
                <TextInput
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Description"
                />
                <TextInput
                    value={receiverAddress}
                    onChange={(e) => setReceiverAddress(e.target.value)}
                    type="text"
                    placeholder="Receiver Address"
                />
                <EtherTIContainer>
                    <TextInput
                        value={amount}
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
