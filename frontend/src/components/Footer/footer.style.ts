import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.palette.header};
    padding: 1.5rem 2rem;
`;

export const Title = styled.h1`
    margin: 3rem;
    margin-top: 6rem;
    letter-spacing: 5px;
    color: ${({ theme }) => theme.palette.headerTitle};
    font-size: 5rem;

    & span {
        color: ${({ theme }) => theme.palette.headerTitleSpan};
    }
`;

export const FooterMain = styled.nav`
    display: flex;
    align-items: center;
`;

export const FooterUL = styled.ul`
    display: flex;
    margin: 3rem;
    list-style: none;

    @media (max-width: 550px) {
        flex-direction: column;
    }
`;

export const FooterItems = styled.li`
    margin-right: 3rem;

    @media (max-width: 550px) {
        margin-right: 0rem;
        margin-bottom: 3rem;
    }

    & svg {
        margin-right: 0.75rem;
    }
`;

export const FooterItem = styled(NavLink)`
    min-width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.palette.headerTitle};
    text-decoration: none;
    font-size: 1.9rem;
    padding: 1rem;
    transition: all 0.3s;

    &:hover {
        color: ${({ theme }) => theme.palette.headerTitleSpan};
    }

    &:hover svg {
        fill: ${({ theme }) => theme.palette.headerTitleSpan};
        color: ${({ theme }) => theme.palette.headerTitleSpan};
    }
`;
