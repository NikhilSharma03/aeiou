import styled from 'styled-components';

export const ErrorModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
`;

export const ErrorModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(15, 15, 15, 0.95);
`;

export const ErrorModalBody = styled.div`
    z-index: 2001;
    background-color: ${({ theme }) => theme.palette.body};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    overflow: hidden;
    width: 60rem;
    animation: pop-in 0.4s;
    transition: all 0.3s;

    @keyframes pop-in {
        0% {
            opacity: 0;
            transform: scale(0.5);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

export const ErrorModalHeader = styled.h1`
    background-color: ${({ theme }) => theme.palette.scrollBarHover};
    padding: 2rem;
`;

export const ErrorModalContent = styled.p`
    padding: 5rem 2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.palette.headerTitle};
`;

export const ErrorButtonContainer = styled.div`
    padding: 2rem;
    display: flex;
    justify-content: flex-end;
`;

export const ErrorCloseButton = styled.div`
    background-color: ${({ theme }) => theme.palette.scrollBarHover};
    padding: 1rem 3rem;
    cursor: pointer;
    margin-right: 2rem;
    font-size: 1.25rem;
    border-radius: 3px;
    transition: all 0.3s;
    font-weight: bold;

    &:hover {
        background-color: ${({ theme }) => theme.palette.scrollBar};
    }
`;
