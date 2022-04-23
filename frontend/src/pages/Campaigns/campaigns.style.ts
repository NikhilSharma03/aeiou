import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 7vh;
    min-height: 100vh;
`;

export const ConnectWalletContainer = styled.div`
    padding: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeadText = styled.h1`
    font-weight: bold;
    color: ${({ theme }) => theme.palette.headerTitle};

    & span {
        color: ${({ theme }) => theme.palette.scrollBarHover};
    }
`;

export const ConnectWalletButton = styled.button`
    background-color: ${({ theme }) => theme.palette.scrollBarHover};
    color: ${({ theme }) => theme.palette.headerTitle};
    padding: 1rem 2rem;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    outline: none;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.palette.scrollBar};
    }
`;
