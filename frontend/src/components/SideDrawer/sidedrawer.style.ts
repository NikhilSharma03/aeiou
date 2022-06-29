import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 70%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.header};
    padding: 1.5rem 2rem;
    border-bottom: 2px solid ${({ theme }) => theme.palette.headerBottomBorder};
    transition: all 0.3s;

    @media (max-width: 900px) {
        padding: 2rem 4rem;
        justify-content: center;
        display: flex;
    }
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    display: none;
    background-color: rgba(0, 0, 0, 0.85);

    @media (max-width: 900px) {
        display: flex;
    }
`;

export const NavMain = styled.nav`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
`;

export const Nav = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    width: 100%;
`;

export const NavItems = styled.li`
    margin-bottom: 3rem;
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.palette.headerBottomBorder};

    & svg {
        margin-right: 0.75rem;
    }
`;

export const NavItem = styled(NavLink)`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.palette.headerTitle};
    text-decoration: none;
    font-size: 1.75rem;
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

export const UserAuthBtn = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.palette.headerTitle};
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    background: ${({ theme }) => theme.palette.headerTitleSpanHover};
    padding: 1.2rem 3rem;
    border-radius: 10px;
    letter-spacing: 2px;
    transition: all 0.3s;
    cursor: pointer;

    & div {
        svg {
            margin-right: 1rem;
        }
        span {
            max-width: 15rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        display: flex;
    }
`;
