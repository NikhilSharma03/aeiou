import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.header};
    padding: 1.5rem 2rem;
    border-bottom: 2px solid ${({ theme }) => theme.palette.headerBottomBorder};

    @media (max-width: 900px) {
        padding: 2rem 4rem;
        justify-content: space-between;
    }
`;

export const Title = styled.h1`
    letter-spacing: 5px;
    color: ${({ theme }) => theme.palette.headerTitle};
    font-size: 2.5rem;

    & span {
        color: ${({ theme }) => theme.palette.headerTitleSpan};
    }
`;

export const NavMain = styled.nav`
    display: flex;
    align-items: center;
`;

export const Nav = styled.ul`
    display: flex;
    align-items: center;
    margin-right: 2rem;
    list-style: none;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const NavItems = styled.li`
    margin-right: 3rem;

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

    @media (max-width: 900px) {
        display: none;
    }
`;
