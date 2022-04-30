import { createSlice } from '@reduxjs/toolkit';
import {
    onGetAllContracts,
    onGetContractByAddress,
} from './../actions/contract';

type ContractDetails = {
    minimumAmount?: string;
    balance: string;
    totalRequest?: string;
    totalContributors?: string;
    managerAddress: string;
    title: string;
    description: string;
    imgSource: string;
    contractAddress: string;
};

interface ContractInitialStateType {
    data: ContractDetails[];
    singleContract: ContractDetails;
    error: string;
    loading: boolean;
}

const initialState: ContractInitialStateType = {
    data: [],
    error: '',
    loading: false,
    singleContract: {
        minimumAmount: '',
        balance: '',
        totalRequest: '',
        totalContributors: '',
        managerAddress: '',
        title: '',
        description: '',
        imgSource: '',
        contractAddress: '',
    },
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
        builder.addCase(onGetContractByAddress.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            onGetContractByAddress.fulfilled,
            (state, { payload }) => {
                state.singleContract = payload;
                state.loading = false;
            }
        );
        builder.addCase(
            onGetContractByAddress.rejected,
            (state, { payload }) => {
                state.loading = false;
                state.error = `${payload}`;
            }
        );
    },
});

export const { onClearContractError } = contractSlice.actions;

export default contractSlice.reducer;
