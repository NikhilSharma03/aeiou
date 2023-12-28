import React from 'react';
import {
    LoadingModalContainer,
    LoadingModalOverlay,
    LoadingSpinner,
} from './loading.style';

interface Props {
    showModal: boolean;
}

const LoadingModal: React.FC<Props> = ({ showModal }) => {
    return showModal ? (
        <LoadingModalContainer>
            <LoadingModalOverlay />
            <LoadingSpinner>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </LoadingSpinner>
        </LoadingModalContainer>
    ) : null;
};

export default LoadingModal;
