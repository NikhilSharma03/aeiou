import { createSlice } from '@reduxjs/toolkit';
import { onGetAllContracts } from './../actions/contract';

type ContractDetails = {
    minimumAmount: string;
    balance: string;
    totalRequest: string;
    totalContributors: string;
    managerAddress: string;
    title: string;
    description: string;
    imgSource: string;
    contractAddress: string;
};

interface ContractInitialStateType {
    data: ContractDetails[];
    error: string;
    loading: boolean;
}

const initialState: ContractInitialStateType = {
    data: [],
    error: '',
    loading: false,
};

export const contractSlice = createSlice({
    name: 'contracts',
    initialState,
    reducers: {
        onClearContractError: (state) => {
            state.error = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(onGetAllContracts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(onGetAllContracts.fulfilled, (state, { payload }) => {
            state.data = payload;
            state.loading = false;
        });
        builder.addCase(onGetAllContracts.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = `${payload}`;
        });
    },
});

export const { onClearContractError } = contractSlice.actions;

export default contractSlice.reducer;
