import { createAsyncThunk } from '@reduxjs/toolkit';
import web3Modal from '../../utils/web3modal';
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
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);

        provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: toHex(5) }],
        });

        const accounts = await web3.eth.getAccounts();

        return { web3, account: accounts[0].toLowerCase() };
    } catch (err) {
        return rejectWithValue('Failed to connect to MetaMask');
    }
});
