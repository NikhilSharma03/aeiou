import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    margin-top: 7vh;
    min-height: 100vh;
`;

export const BannerImgContainer = styled.div``;

export const BannerImg = styled.img``;

export const BannerMain = styled.div`
    display: flex;
`;

export const BannerTitle = styled.h1``;

export const BannerContributeButton = styled.button``;

export const BannerDesc = styled.p``;

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
`;

export const ContractRequestCreateButton = styled(Link)``;

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

export const ApproveButton = styled.button``;

export const FinalizeButton = styled.button``;
