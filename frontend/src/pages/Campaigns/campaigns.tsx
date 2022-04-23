import React from 'react';
import {
    ConnectWalletButton,
    ConnectWalletContainer,
    Container,
    HeadText,
} from './campaigns.style';
import web3 from 'web3';

const Campaigns: React.FC = () => {
    React.useEffect(() => {}, []);

    return (
        <Container>
            <ConnectWalletContainer>
                <HeadText>
                    All <span>Contracts</span>
                </HeadText>
                <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
            </ConnectWalletContainer>
        </Container>
    );
};

export default Campaigns;
