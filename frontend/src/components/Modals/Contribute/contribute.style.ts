import styled from 'styled-components';

export const ContributeContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
`;

export const ContributeOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(15, 15, 15, 0.95);
`;

export const ContributeBody = styled.div`
    z-index: 2001;
    background-color: ${({ theme }) => theme.palette.body};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    overflow: hidden;
    width: 60rem;
    animation: pop-in 0.4s;
    transition: all 0.3s;

    @keyframes pop-in {
        0% {
            opacity: 0;
            transform: scale(0.5);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

export const ContributeHeader = styled.h1`
    background-color: ${({ theme }) => theme.palette.scrollBarHover};
    padding: 2rem;
`;

export const ContributeContent = styled.div`
    padding: 5rem 4rem;
`;

export const ContributeLabel = styled.p`
    color: ${({ theme }) => theme.palette.headerTitle};
    font-size: 1.5rem;
    span {
        color: ${({ theme }) => theme.palette.scrollBarHover};
    }
`;

export const ContributeInput = styled.input`
    color: ${({ theme }) => theme.palette.inputText};
    display: block;
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.palette.body};
    border: 1px solid ${({ theme }) => theme.palette.headerTitle};
    transition: all 0.3s;
    outline: none;
    margin-bottom: 2rem;

    ::placeholder {
        color: ${({ theme }) => theme.palette.inputPlaceholder};
    }
    &:focus {
        border: 1px solid ${({ theme }) => theme.palette.scrollBar};
    }
`;

export const EtherContributeContainer = styled.div`
    display: flex;
    align-items: flex-start;

    & input {
        border-radius: 5px 0 0 5px;
        border-right: none;
    }
`;

export const EtherContributeLabel = styled.label`
    background-color: ${({ theme }) => theme.palette.scrollBarHover};
    border-radius: 0 5px 5px 0;
    height: 3.75rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    font-size: 1.25rem;
    font-weight: bold;
`;

export const ContributeButtonContainer = styled.div`
    padding: 2rem;
    display: flex;
    justify-content: flex-end;
`;

export const ContributeCloseButton = styled.div`
    background-color: ${({ theme }) => theme.palette.scrollBarHover};
    padding: 1rem 3rem;
    cursor: pointer;
    margin-right: 2rem;
    font-size: 1.25rem;
    border-radius: 3px;
    transition: all 0.3s;
    font-weight: bold;

    &:hover {
        background-color: ${({ theme }) => theme.palette.scrollBar};
    }
`;
