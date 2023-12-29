import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header<{ changeNavbarColor: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    transition: all 0.3s;

    background-color: ${({ theme, changeNavbarColor }) =>
        changeNavbarColor ? theme.palette.header : 'transparent'};
`;

export const Title = styled.h1`
    letter-spacing: 5px;
    color: ${({ theme }) => theme.palette.headerTitle};
    font-size: 3.75rem;
    cursor: pointer;

    & span {
        color: ${({ theme }) => theme.palette.headerTitleSpan};
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.palette.headerTitle};
    }
`;

export const NavMain = styled.nav`
    display: flex;
    align-items: center;
`;

export const Nav = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    border: 2px solid ${({ theme }) => theme.palette.headerBottomBorder};
    background-color: ${({ theme }) => theme.palette.body};
    padding: 0.4rem 2rem;
    border-radius: 3rem;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const NavItems = styled.li`
    display: flex;

    &:not(:last-child) {
        margin-right: 3rem;
    }

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

export const SideBarMenu = styled.div`
    display: none;
    cursor: pointer;

    & div {
        width: 30px;
        height: 2.5px;
        background-color: ${({ theme }) => theme.palette.headerTitle};
        margin: 6px 0;
    }

    @media (max-width: 900px) {
        display: block;
    }
`;

export const UserAuthBtn = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.palette.headerTitle};
    text-decoration: none;
    font-size: 1.7rem;
    font-weight: bold;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.palette.headerTitleSpanHover};
    padding: 1.6rem 3rem;
    border-radius: 2.5rem;
    letter-spacing: 2px;
    transition: all 0.3s;
    cursor: pointer;

    & div {
        svg {
            margin-right: 1rem;
        }
        display: flex;
    }

    &:hover {
        background: ${({ theme }) => theme.palette.headerTitleSpanHover};
    }

    @media (max-width: 900px) {
        display: none;
    }
`;
