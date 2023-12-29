import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.palette.header};
    padding: 1.5rem 2rem;
`;

export const Title = styled.h1`
    margin: 1rem;
    letter-spacing: 5px;
    color: ${({ theme }) => theme.palette.headerTitle};
    font-size: 2rem;

    & span {
        color: ${({ theme }) => theme.palette.headerTitleSpan};
    }
`;
