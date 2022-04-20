import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
`;

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
`;

export const Content = styled.div`
    flex: 1;
    padding-left: 3rem;
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
`;

export const ContentPara = styled.p`
    font-size: 3rem;
    color: ${({ theme }) => theme.palette.homeTitle};
    font-style: italic;

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
`;

export const BannerContainer = styled.div`
    flex: 1;
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
`;

export const BannerImage = styled.img`
    width: 100%;
`;
