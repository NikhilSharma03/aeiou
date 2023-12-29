import styled from 'styled-components';

export const Container = styled.div`
    min-height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const FormHeader = styled.div`
    background-color: ${({ theme }) => theme.palette.scrollBarHover};
    min-width: 60rem;
    padding: 2rem;
    margin-top: 7rem;

    @media (max-width: 500px) {
        min-width: 55rem;
    }

    @media (max-width: 425px) {
        min-width: 50rem;
    }

    @media (max-width: 380px) {
        min-width: 48rem;
    }
`;

export const FormHeaderTitle = styled.h1`
    text-align: center;
    font-size: 2.25rem;
    color: ${({ theme }) => theme.palette.form};
`;

export const Form = styled.form`
    border-radius: 0 0 5px 5px;
    background-color: ${({ theme }) => theme.palette.form};
    padding: 5rem 4rem;
    min-width: 60rem;

    @media (max-width: 500px) {
        min-width: 55rem;
    }

    @media (max-width: 425px) {
        min-width: 50rem;
    }

    @media (max-width: 380px) {
        min-width: 48rem;
    }
`;

export const NCDiv = styled.div`
    display: flex;

    & input {
        border-radius: 5px 0 0 5px;
    }
`;

export const ETHLabel = styled.p`
    margin-bottom: 4rem;
    background-color: ${({ theme }) => theme.palette.scrollBar};
    border: 1px solid ${({ theme }) => theme.palette.scrollBar};
    border-radius: 0 5px 5px 0;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    padding: 0 1rem;
`;

export const TextInput = styled.input`
    color: ${({ theme }) => theme.palette.inputText};
    display: block;
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.palette.body};
    border: 1px solid ${({ theme }) => theme.palette.headerTitle};
    transition: all 0.3s;
    outline: none;
    margin-bottom: 4rem;

    ::placeholder {
        color: ${({ theme }) => theme.palette.inputPlaceholder};
    }
    &:focus {
        border: 1px solid ${({ theme }) => theme.palette.scrollBar};
    }
`;

export const SubmitButton = styled.input`
    color: ${({ theme }) => theme.palette.body};
    font-weight: bold;
    display: block;
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.palette.scrollBarHover};
    border: 1px solid ${({ theme }) => theme.palette.scrollBarHover};
    transition: all 0.3s;
    outline: none;
    cursor: pointer;
    &:hover {
        border: 1px solid ${({ theme }) => theme.palette.scrollBar};
        background-color: ${({ theme }) => theme.palette.scrollBar};
    }
`;
