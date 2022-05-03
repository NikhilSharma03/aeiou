import styled from 'styled-components';

export const Container = styled.div`
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const FormHeader = styled.div`
    background-color: ${({ theme }) => theme.palette.scrollBarHover};
    min-width: 60rem;
    padding: 2rem;
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
