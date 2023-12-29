import React, { useEffect, useState } from 'react';
import {
    ConnectWalletButton,
    ConnectWalletContainer,
    Container,
    ContractCard,
    ContractCardDetailsText,
    ContractCardDetails,
    ContractCardImg,
    ContractCardImgContainer,
    ContractContainer,
    ContractDetailsButton,
    HeadText,
    CreateCampaignText,
} from './campaigns.style';
import { Link, useNavigate } from 'react-router-dom';
import { onGetAllContracts } from './../../redux/actions/contract';
import { onClearContractError } from './../../redux/reducers/contract';
import { useAppDispatch, useAppSelector } from './../../hooks/hooks';
import ErrorModal from '../../components/Modals/Error/error';
import LoadingModal from '../../components/Modals/Loading/loading';
import Web3 from 'web3';

const Campaigns: React.FC = () => {
    const navigate = useNavigate();

    const contracts = useAppSelector((state) => state.contracts.data);
    const contractLoading: boolean = useAppSelector(
        (state) => state.contracts.loading
    );
    const contractError: string = useAppSelector(
        (state) => state.contracts.error
    );
    const web3 = useAppSelector((state) => state.users.web3);
    const isWalletConnected = useAppSelector(
        (state) => state.users.isWalletConnected
    );

    const dispatch = useAppDispatch();
    const clearContractError = () => dispatch(onClearContractError());

    useEffect(() => {
        if (!isWalletConnected) {
            navigate('/');
            return;
        }
        if (web3) {
            dispatch(onGetAllContracts(web3));
        }
    }, []);

    return (
        <React.Fragment>
            <ErrorModal
                content={contractError}
                showModal={!!contractError}
                closeModal={clearContractError}
            />
            <LoadingModal showModal={contractLoading} />
            <Container>
                <ConnectWalletContainer>
                    <HeadText>
                        All <span>Contracts</span>
                    </HeadText>
                </ConnectWalletContainer>
                <ContractContainer>
                    {contracts.length === 0 ? (
                        <CreateCampaignText>
                            No Campaign Found. Let's{' '}
                            <Link to="/campaigns/new">Create One</Link>
                        </CreateCampaignText>
                    ) : (
                        contracts.map((contract) => (
                            <ContractCard key={contract.contractAddress}>
                                <ContractCardImgContainer>
                                    <ContractCardImg
                                        src={contract.imgSource}
                                        alt="image"
                                    />
                                </ContractCardImgContainer>
                                <ContractCardDetails>
                                    <ContractCardDetailsText>
                                        <label>
                                            Title <br />
                                        </label>
                                        <span>{contract.title}</span>
                                    </ContractCardDetailsText>
                                    <ContractCardDetailsText>
                                        <label>
                                            Description <br />
                                        </label>
                                        <span>{contract.description}</span>
                                    </ContractCardDetailsText>
                                    <ContractCardDetailsText>
                                        <label>
                                            Manager <br />
                                        </label>
                                        <span>{contract.managerAddress}</span>
                                    </ContractCardDetailsText>
                                    <ContractCardDetailsText>
                                        <label>
                                            Balance <br />
                                        </label>
                                        <span>
                                            {Web3.utils.fromWei(
                                                contract.balance,
                                                'ether'
                                            )}{' '}
                                            ETH
                                        </span>
                                    </ContractCardDetailsText>
                                    <ContractDetailsButton
                                        to={`/campaigns/${contract.contractAddress}`}
                                    >
                                        Explore Campaign
                                    </ContractDetailsButton>
                                </ContractCardDetails>
                            </ContractCard>
                        ))
                    )}
                </ContractContainer>
            </Container>
        </React.Fragment>
    );
};

export default Campaigns;
