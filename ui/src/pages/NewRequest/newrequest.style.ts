import styled from 'styled-components';

export const Container = styled.div`
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 7vh;
`;

export const FormHeader = styled.div`
    background-color: ${({ theme }) => theme.palette.scrollBarHover};
    min-width: 60rem;
    padding: 2rem;

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
    border-radius: 5px;
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

export const EtherTIContainer = styled.div`
    display: flex;
    align-items: flex-start;

    & input {
        border-radius: 5px 0 0 5px;
        border-right: none;
    }
`;

export const EtherTILabel = styled.label`
    background-color: ${({ theme }) => theme.palette.scrollBarHover};
    border-radius: 0 5px 5px 0;
    height: 4.2rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    font-size: 1.25rem;
    font-weight: bold;
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
