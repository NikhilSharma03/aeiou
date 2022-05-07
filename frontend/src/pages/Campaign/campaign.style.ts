import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    margin-top: 7vh;
    min-height: 100vh;
`;

export const BannerImgContainer = styled.div``;

export const BannerImg = styled.img``;

export const BannerTitle = styled.h1``;

export const ContractDetailsText = styled.p`
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

export const ContractRequestContainer = styled.div``;

export const ContractRequestTitle = styled.h1``;

export const ContractRequestCreateButton = styled(Link)``;

export const RequestTable = styled.table``;

export const RequestTableHeader = styled.th``;

export const RequestTableRow = styled.tr``;

export const RequestTableData = styled.td``;

export const ApproveButton = styled.button``;
