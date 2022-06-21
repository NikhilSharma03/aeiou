import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    margin-top: 7vh;
    min-height: 100vh;
    padding: 5rem 15rem;
`;

export const BannerImgContainer = styled.div`
    height: 50rem;
    margin-bottom: 4rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.palette.headerBottomBorder};
`;

export const BannerImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BannerMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    font-size: 1.5rem;
`;

export const BannerTitle = styled.h1`
    color: ${({ theme }) => theme.palette.headerTitle};
    margin-right: 2rem;
`;

export const BannerContributeButton = styled.button`
    padding: 1rem;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.headerTitle};
    background-color: ${({ theme }) => theme.palette.scrollBarHover};

    &:disabled {
        background-color: ${({ theme }) => theme.palette.homeCardDesc};
        cursor: not-allowed;
    }
`;

export const BannerDesc = styled.p`
    color: ${({ theme }) => theme.palette.homeCardDesc};
    font-size: 2rem;
    margin-bottom: 3rem;
`;

export const ContractDetailsText = styled.p`
    font-size: 1.5rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.palette.headerTitle};
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    & label {
        background-color: ${({ theme }) => theme.palette.body};
        color: ${({ theme }) => theme.palette.headerTitleSpan};
        border: 1px solid ${({ theme }) => theme.palette.headerBottomBorder};
        padding: 0.4rem 1rem;

        b {
            color: ${({ theme }) => theme.palette.headerTitle};
        }
    }
    & span {
        display: block;
        margin-left: 1.3rem;
        font-weight: bold;
    }
`;

export const ContractRequestContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;

    & p {
        margin-bottom: 0rem;
    }
`;

export const ContractRequestCreateButton = styled(Link)`
    padding: 1rem 1rem;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.25rem;
    font-weight: bold;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.headerTitle};
    background-color: ${({ theme }) => theme.palette.scrollBarHover};
`;

export const RequestTableContainer = styled.div``;

export const RequestTable = styled.table`
    border-collapse: collapse;
    border-radius: 3px;
    overflow: hidden;
    width: 100%;
    color: ${({ theme }) => theme.palette.headerTitle};
`;

export const RequestTableHead = styled.thead``;

export const RequestTableBody = styled.tbody``;

export const RequestTableHeader = styled.th`
    border: 1px solid ${({ theme }) => theme.palette.headerBottomBorder};
    padding: 1rem;
    text-align: left;
    font-size: 1.5rem;
    background-color: ${({ theme }) => theme.palette.headerTitleSpan};
    color: white;
`;

export const RequestTableRow = styled.tr`
    border: 1px solid ${({ theme }) => theme.palette.headerBottomBorder};
    padding: 1rem;
    font-size: 1.5rem;
    &:nth-child(even) {
        background-color: ${({ theme }) => theme.palette.header};
    }
`;

export const RequestTableData = styled.td`
    border: 1px solid ${({ theme }) => theme.palette.headerBottomBorder};
    padding: 1rem;
`;

export const ApproveButton = styled.button`
    padding: 1rem;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.headerTitle};
    background-color: ${({ theme }) => theme.palette.scrollBarHover};

    &:disabled {
        background-color: ${({ theme }) => theme.palette.homeCardDesc};
        cursor: not-allowed;
    }
`;

export const FinalizeButton = styled.button`
    padding: 1rem;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.headerTitle};
    background-color: ${({ theme }) => theme.palette.scrollBarHover};

    &:disabled {
        background-color: ${({ theme }) => theme.palette.homeCardDesc};
        cursor: not-allowed;
    }
`;
