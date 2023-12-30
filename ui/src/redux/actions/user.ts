import { createAsyncThunk } from '@reduxjs/toolkit';
import Web3 from 'web3';

export const toHex = (num) => {
    const val = Number(num);
    return '0x' + val.toString(16);
};

export const onConnectWallet = createAsyncThunk<
    { account: string; web3: Web3 },
    void,
    { rejectValue: string }
>('user/connectWallet', async (_, { rejectWithValue }) => {
    try {
        if (typeof window.ethereum === 'undefined') {
            return rejectWithValue('Please Install Metamask');
        }

        const provider = window.ethereum;

        const accounts = await provider.request({
            method: 'eth_requestAccounts',
        });

        await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: toHex(5) }],
        });

        const web3 = new Web3(provider);

        localStorage.setItem('user-address', accounts[0].toLowerCase());

        return { web3, account: accounts[0].toLowerCase() };
    } catch (err) {
        return rejectWithValue('Failed to connect to MetaMask');
    }
});
