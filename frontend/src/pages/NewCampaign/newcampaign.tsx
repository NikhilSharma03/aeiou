import React, { useState } from 'react';
import {
    Container,
    Form,
    FormHeader,
    FormHeaderTitle,
    SubmitButton,
    TextInput,
} from './newcampaign.style';
import { onCreateNewContract } from './../../redux/actions/contract';
import { useAppDispatch, useAppSelector } from './../../hooks/hooks';
import LoadingModal from '../../components/Modals/Loading/loading';
import web3 from 'web3';

const NewCampaign: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [minimumContribution, setMinimumContribution] = useState<string>('');
    const [createLoading, setCreateLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const userWalletAccount = useAppSelector(
        (state) => state.users.userWalletAccount
    );

    const createNewContract = (
        name,
        description,
        imageURL,
        minimumContribution,
        userWalletAccount
    ) =>
        dispatch(
            onCreateNewContract({
                name,
                description,
                imageURL,
                minimumContribution,
                userWalletAccount,
            })
        );

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setCreateLoading(true);
        const minContri = web3.utils.toWei(minimumContribution);

        const data = {
            name,
            description,
            imageUrl,
            minimumContribution: minContri,
        };
        createNewContract(
            data.name,
            data.description,
            data.imageUrl,
            data.minimumContribution,
            userWalletAccount
        );
        setCreateLoading(false);
    };

    return (
        <Container>
            <LoadingModal showModal={createLoading} />
            <FormHeader>
                <FormHeaderTitle>New Campaign</FormHeaderTitle>
            </FormHeader>
            <Form onSubmit={onSubmitHandler}>
                <TextInput
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextInput
                    type="text"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextInput
                    type="text"
                    placeholder="ImageURL"
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <TextInput
                    type="text"
                    placeholder="Minimum Contribution (ETH)"
                    onChange={(e) => setMinimumContribution(e.target.value)}
                />
                <SubmitButton type="submit" name="Submit" />
            </Form>
        </Container>
    );
};

export default NewCampaign;
