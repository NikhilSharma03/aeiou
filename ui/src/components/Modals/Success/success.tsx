import React from 'react';
import {
    SuccessButtonContainer,
    SuccessCloseButton,
    SuccessModalBody,
    SuccessModalContainer,
    SuccessModalContent,
    SuccessModalHeader,
    SuccessModalOverlay,
} from './success.style';

interface Props {
    showModal: boolean;
    closeModal?: () => void;
    content: string;
}

const SuccessModal: React.FC<Props> = ({ showModal, closeModal, content }) => {
    return showModal ? (
        <SuccessModalContainer>
            <SuccessModalOverlay />
            <SuccessModalBody>
                <SuccessModalHeader>Success</SuccessModalHeader>
                <SuccessModalContent>{content}</SuccessModalContent>
                <SuccessButtonContainer>
                    <SuccessCloseButton onClick={closeModal}>
                        Close
                    </SuccessCloseButton>
                </SuccessButtonContainer>
            </SuccessModalBody>
        </SuccessModalContainer>
    ) : null;
};

export default SuccessModal;
