import { Link } from 'react-router-dom';
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

    & label {
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

    &:disabled,
    &[disabled] {
        background-color: ${({ theme }) => theme.palette.scrollBar};
    }
`;

export const CreateCampaignText = styled.h1`
    font-size: 3rem;
    font-weight: lighter;
    margin-top: 5rem;
    text-align: center;
    color: ${({ theme }) => theme.palette.headerTitle};

    & a {
        color: ${({ theme }) => theme.palette.scrollBarHover};
        text-decoration: none;
        transition: all 0.3s;

        &:hover {
            color: ${({ theme }) => theme.palette.scrollBar};
        }
    }
`;

export const ContractContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0rem 1rem;
    margin-bottom: 8rem;
`;

export const ContractCard = styled.div`
    margin: 4rem 4rem;
    width: 60rem;
    padding: 2rem;
    background-color: ${({ theme }) => theme.palette.header};
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
`;

export const ContractCardImgContainer = styled.div`
    width: 100%;
    height: 40rem;
`;

export const ContractCardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ContractCardDetails = styled.div`
    margin-top: 2rem;
    padding: 2rem 0;
`;

export const ContractCardDetailsText = styled.p`
    font-size: 1.5rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.palette.headerTitle};
    margin-bottom: 1.5rem;
    & label {
        background-color: ${({ theme }) => theme.palette.body};
        color: ${({ theme }) => theme.palette.headerTitleSpan};
        border: 1px solid ${({ theme }) => theme.palette.headerBottomBorder};
        padding: 0.4rem 1rem;
    }
    & span {
        display: block;
        margin-top: 0.7rem;
        margin-left: 0.3rem;
    }
`;

export const ContractDetailsButton = styled(Link)`
    background-color: ${({ theme }) => theme.palette.headerTitleSpan};
    width: 100%;
    display: block;
    text-align: center;
    padding: 1.5rem;
    margin-top: 1rem;
    border-radius: 3px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.body};
    transition: all 0.3s;
    &:hover {
        background-color: ${({ theme }) => theme.palette.headerTitleSpanHover};
    }
`;
