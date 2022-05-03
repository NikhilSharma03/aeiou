import { createSlice } from '@reduxjs/toolkit';
import { onConnectWallet } from './../actions/user';

const initialState = {
    userWalletAccount: '',
    isWalletConnected: false,
    loading: false,
    error: '',
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
            state.userWalletAccount = payload;
            state.isWalletConnected = true;
            state.loading = false;
        });
        builder.addCase(onConnectWallet.rejected, (state, action) => {
            state.error = String(action.payload);
            state.loading = false;
        });
    },
});

export const { onClearUserError } = userSlice.actions;

export default userSlice.reducer;
