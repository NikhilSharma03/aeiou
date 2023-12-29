import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15vh;
    height: 85vh;

    @media (max-width: 600px) {
        justify-content: center;
    }
`;

export const Content = styled.div`
    text-align: center;
`;

export const ContentHead = styled.h1`
    font-size: 7rem;
    font-weight: lighter;
    color: ${({ theme }) => theme.palette.homeTitle};
    margin-bottom: 2rem;

    & span {
        display: inline-block;
        color: ${({ theme }) => theme.palette.homeSpan};
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
            transform: skewY(-2deg) scale(1.05);
            color: ${({ theme }) => theme.palette.homeSpanHover};
        }
    }

    @media (max-width: 650px) {
        font-size: 6rem;
    }

    @media (max-width: 490px) {
        font-size: 5rem;
    }
`;

export const ContentPara = styled.p`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.palette.homeTitle};

    @media (max-width: 650px) {
        font-size: 2.75rem;
    }

    @media (max-width: 490px) {
        font-size: 2.5rem;
    }
`;

export const ExploreBtn = styled.button`
    margin: 0 auto;
    margin-top: 5rem;
    color: ${({ theme }) => theme.palette.headerTitle};
    font-size: 1.7rem;
    font-weight: bold;
    background-color: ${({ theme }) => theme.palette.headerTitleSpan};
    border: none;
    padding: 1.8rem 4rem;
    border-radius: 2.5rem;
    letter-spacing: 2px;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.palette.homeSpanHover};
    }
`;

export const Banner = styled.div`
    width: 120rem;
    transform: translateY(-10rem);
    z-index: -1;

    @media (max-width: 1200px) {
        width: 100%;
    }
    @media (max-width: 850px) {
        transform: translateY(0rem);
    }
`;

export const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const WorksContainer = styled.div`
    padding: 0 5rem;
    margin-top: 14rem;
    margin-bottom: 20rem;
`;

export const WorksHeadContainer = styled.div`
    display: flex;
`;

export const WorksHead = styled.h1`
    font-size: 3rem;
    transform: skewY(-2deg);
    margin-bottom: 10rem;
    padding: 3rem 2rem;
    display: flex;
    background-color: ${({ theme }) => theme.palette.header};
    color: ${({ theme }) => theme.palette.headerTitle};
    font-weight: bold;

    & svg {
        margin-right: 2rem;
    }

    & span {
        color: ${({ theme }) => theme.palette.headerTitleSpan};
        white-space: pre;
    }
`;

export const WorksBoxContainer = styled.div`
    display: flex;
    margin: 10rem 2rem;

    @media (max-width: 1150px) {
        flex-direction: column;
    }
`;

export const WorksBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    margin-right: 10rem;
    border: 2px solid ${({ theme }) => theme.palette.headerBottomBorder};
    background-color: ${({ theme }) => theme.palette.header};
    border-radius: 3px;
    overflow: hidden;

    &:last-child {
        margin-right: 0;
    }

    @media (max-width: 1150px) {
        margin: 0 auto;
        margin-bottom: 15rem;
        width: 45%;

        &:last-child {
            margin-bottom: 0rem;
            margin: 0 auto;
        }
    }

    @media (max-width: 900px) {
        width: 55%;
    }

    @media (max-width: 800px) {
        width: 60%;
    }

    @media (max-width: 700px) {
        width: 75%;
    }

    @media (max-width: 550px) {
        width: 100%;
    }
`;

export const WorksBoxIconContainer = styled.div`
    & svg {
        margin-top: 2rem;
        color: ${({ theme }) => theme.palette.headerTitleSpan};
        fill: ${({ theme }) => theme.palette.headerTitleSpan};
        width: 8rem;
        height: 8rem;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            color: ${({ theme }) => theme.palette.headerTitleSpanHover};
            fill: ${({ theme }) => theme.palette.headerTitleSpanHover};
        }
    }
`;

export const WorksBoxTitle = styled.h1`
    font-size: 2.5rem;
    margin-top: 4rem;
    text-align: center;
    color: ${({ theme }) => theme.palette.headerTitle};
`;

export const WorksBoxDesc = styled.p`
    font-size: 2rem;
    margin: 4rem 0;
    text-align: center;
    line-height: 1.9;
    padding: 0 3rem;
    color: ${({ theme }) => theme.palette.homeCardDesc};
`;
