import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MetamaskModalContainer = styled.div`
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

export const MetamaskModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(15, 15, 15, 0.95);
`;

export const MetamaskModalBody = styled.div`
    z-index: 2001;
    background-color: ${({ theme }) => theme.palette.body};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    overflow: hidden;
    width: 60rem;
`;

export const MetamaskModalHeader = styled.h1`
    background-color: ${({ theme }) => theme.palette.scrollBarHover};
    padding: 2rem;
`;

export const MetamaskModalContent = styled.p`
    padding: 5rem 2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.palette.headerTitle};
`;

export const MetamaskButtonContainer = styled.div`
    padding: 2rem;
    display: flex;
    justify-content: flex-end;
`;

export const MetamaskCloseButton = styled.div`
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

export const MetamaskVisitButton = styled.a`
    padding: 1rem 3rem;
    cursor: pointer;
    border-radius: 3px;
    font-size: 1.25rem;
    background-color: ${({ theme }) => theme.palette.scrollBarHover};
    transition: all 0.3s;
    text-decoration: none;
    color: #000;
    font-weight: bold;
    &:hover {
        background-color: ${({ theme }) => theme.palette.scrollBar};
    }
`;
