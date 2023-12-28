import React from 'react';
import {
    MetamaskButtonContainer,
    MetamaskCloseButton,
    MetamaskModalBody,
    MetamaskModalContainer,
    MetamaskModalContent,
    MetamaskModalHeader,
    MetamaskModalOverlay,
    MetamaskVisitButton,
} from './metamask.style';

interface Props {
    showModal: boolean;
    closeModal?: () => void;
}

const Metamask: React.FC<Props> = ({ showModal, closeModal }) => {
    return showModal ? (
        <MetamaskModalContainer>
            <MetamaskModalOverlay />
            <MetamaskModalBody>
                <MetamaskModalHeader>Install Metamask</MetamaskModalHeader>
                <MetamaskModalContent>
                    Oh! Seems like you don't have Metamask Installed.
                </MetamaskModalContent>
                <MetamaskButtonContainer>
                    <MetamaskCloseButton onClick={closeModal}>
                        Done
                    </MetamaskCloseButton>
                    <MetamaskVisitButton
                        href="https://metamask.io/download/"
                        target="_blank"
                    >
                        Install Metamask
                    </MetamaskVisitButton>
                </MetamaskButtonContainer>
            </MetamaskModalBody>
        </MetamaskModalContainer>
    ) : null;
};

export default Metamask;
