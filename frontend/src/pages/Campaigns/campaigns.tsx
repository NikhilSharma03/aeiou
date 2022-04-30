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
import web3 from 'web3';
import { Link } from 'react-router-dom';
import { onConnectWallet } from './../../redux/actions/user';
import { onGetAllContracts } from './../../redux/actions/contract';
import { onClearUserError } from './../../redux/reducers/user';
import { onClearContractError } from './../../redux/reducers/contract';
import { useAppDispatch, useAppSelector } from './../../hooks/hooks';
import Metamask from '../../components/Modals/Metamask/metamask';
import ErrorModal from '../../components/Modals/Error/error';
import LoadingModal from '../../components/Modals/Loading/loading';

const Campaigns: React.FC = () => {
    const [showMetaMaskModal, setShowMetaMaskModal] = useState(false);
    const dispatch = useAppDispatch();
    const contracts = useAppSelector((state) => state.contracts.data);
    const contractLoading: boolean = useAppSelector(
        (state) => state.contracts.loading
    );
    const contractError: string = useAppSelector(
        (state) => state.contracts.error
    );
    const isWalletConnected: boolean = useAppSelector(
        (state) => state.users.isWalletConnected
    );
    const userError: string = useAppSelector((state) => state.users.error);

    const connectWallet = () => dispatch(onConnectWallet());
    const clearUserError = () => dispatch(onClearUserError());
    const clearContractError = () => dispatch(onClearContractError());

    useEffect(() => {
        dispatch(onGetAllContracts());
    }, []);

    if (userError !== '' && !showMetaMaskModal) {
        setShowMetaMaskModal(true);
    }

    const onClearMetaMaskError = () => {
        setShowMetaMaskModal(false);
        clearUserError();
    };

    return (
        <React.Fragment>
            <Metamask
                showModal={showMetaMaskModal}
                closeModal={onClearMetaMaskError}
            />
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
                    <ConnectWalletButton
                        disabled={isWalletConnected}
                        onClick={connectWallet}
                    >
                        {isWalletConnected
                            ? 'Wallet Connected'
                            : 'Connect Wallet'}
                    </ConnectWalletButton>
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
                                        <span>{contract.balance}</span>
                                    </ContractCardDetailsText>
                                    <ContractCardDetailsText>
                                        <label>
                                            Minimum Amount <br />
                                        </label>
                                        <span>
                                            {web3.utils.fromWei(
                                                contract.minimumAmount,
                                                'ether'
                                            )}{' '}
                                            ether
                                        </span>
                                    </ContractCardDetailsText>
                                    <ContractCardDetailsText>
                                        <label>
                                            Total Contributors <br />
                                        </label>
                                        <span>
                                            {contract.totalContributors}
                                        </span>
                                    </ContractCardDetailsText>
                                    <ContractCardDetailsText>
                                        <label>
                                            Total Requests <br />
                                        </label>
                                        <span>{contract.totalRequest}</span>
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
