import React from 'react';
import {
    ContributeButtonContainer,
    ContributeCloseButton,
    ContributeBody,
    ContributeContainer,
    ContributeContent,
    ContributeHeader,
    ContributeOverlay,
    ContributeInput,
    ContributeLabel,
    EtherContributeContainer,
    EtherContributeLabel,
} from './contribute.style';
import Web3 from 'web3';

interface Props {
    showModal: boolean;
    onContribute?: () => void;
    contributeAmount: string;
    setContributeAmount: React.Dispatch<React.SetStateAction<string>>;
    minimumAmount: string;
    closeModal?: () => void;
}

const ContributeModal: React.FC<Props> = ({
    showModal,
    onContribute,
    contributeAmount,
    minimumAmount,
    setContributeAmount,
    closeModal,
}) => {
    return showModal ? (
        <ContributeContainer>
            <ContributeOverlay />
            <ContributeBody>
                <ContributeHeader>Contribute</ContributeHeader>
                <ContributeContent>
                    <EtherContributeContainer>
                        <ContributeInput
                            type="text"
                            value={contributeAmount}
                            onChange={(e) =>
                                setContributeAmount(e.target.value)
                            }
                            placeholder="Amount"
                        />
                        <EtherContributeLabel>ETH</EtherContributeLabel>
                    </EtherContributeContainer>
                    <ContributeLabel>
                        Please enter amount equal or more than{' '}
                        <span>
                            {Web3.utils.fromWei(minimumAmount, 'ether')} ether!
                        </span>
                    </ContributeLabel>
                </ContributeContent>
                <ContributeButtonContainer>
                    <ContributeCloseButton onClick={closeModal}>
                        Close
                    </ContributeCloseButton>
                    <ContributeCloseButton onClick={onContribute}>
                        Contribute
                    </ContributeCloseButton>
                </ContributeButtonContainer>
            </ContributeBody>
        </ContributeContainer>
    ) : null;
};

export default ContributeModal;
