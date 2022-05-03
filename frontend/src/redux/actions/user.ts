import { createAsyncThunk } from '@reduxjs/toolkit';

export const onConnectWallet = createAsyncThunk<
    string,
    void,
    { rejectValue: string }
>('user/connectWallet', async (_, { rejectWithValue }) => {
    const { ethereum } = window;
    if (!ethereum) {
        return rejectWithValue('Please install MetaMask');
    }
    try {
        const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
        });
        let account = accounts[0];
        if (account !== '') {
            return account;
        }
    } catch (err) {
        return rejectWithValue('Failed to connect to MetaMask');
    }
});
