import React from 'react';
import {
    ErrorButtonContainer,
    ErrorCloseButton,
    ErrorModalBody,
    ErrorModalContainer,
    ErrorModalContent,
    ErrorModalHeader,
    ErrorModalOverlay,
} from './error.style';

interface Props {
    showModal: boolean;
    closeModal?: () => void;
    content: string;
}

const ErrorModal: React.FC<Props> = ({ showModal, closeModal, content }) => {
    return showModal ? (
        <ErrorModalContainer>
            <ErrorModalOverlay />
            <ErrorModalBody>
                <ErrorModalHeader>Error</ErrorModalHeader>
                <ErrorModalContent>{content}</ErrorModalContent>
                <ErrorButtonContainer>
                    <ErrorCloseButton onClick={closeModal}>
                        Close
                    </ErrorCloseButton>
                </ErrorButtonContainer>
            </ErrorModalBody>
        </ErrorModalContainer>
    ) : null;
};

export default ErrorModal;
