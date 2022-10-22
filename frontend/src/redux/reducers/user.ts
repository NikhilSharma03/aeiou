import { createSlice } from '@reduxjs/toolkit';
import { onConnectWallet } from './../actions/user';

const initialState: {
    userWalletAccount: string;
    isWalletConnected: boolean;
    loading: boolean;
    error: string;
    web3: any;
} = {
    userWalletAccount: '',
    isWalletConnected: false,
    loading: false,
    error: '',
    web3: null,
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        onClearUserError: (state) => {
            state.error = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(onConnectWallet.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(onConnectWallet.fulfilled, (state, { payload }) => {
            state.userWalletAccount = payload.account;
            state.isWalletConnected = true;
            state.loading = false;
            state.web3 = payload.web3;
        });
        builder.addCase(onConnectWallet.rejected, (state, action) => {
            state.error = String(action.payload);
            state.loading = false;
        });
    },
});

export const { onClearUserError } = userSlice.actions;

export default userSlice.reducer;
