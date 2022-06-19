import { createSlice } from '@reduxjs/toolkit';
import {
    onGetAllContracts,
    onGetContractByAddress,
    onCreateRequest,
    onCreateNewContract,
} from './../actions/contract';

type ContractDetails = {
    minimumAmount?: string;
    targetAmount?: string;
    balance: string;
    totalRequest?: string;
    totalContributors?: string;
    managerAddress: string;
    title: string;
    description: string;
    imgSource: string;
    contractAddress: string;
    requests?: Request[];
};

interface ContractInitialStateType {
    data: ContractDetails[];
    singleContract: ContractDetails;
    error: string;
    completed: boolean;
    loading: boolean;
}

type Request = {
    requestTitle: any;
    requestDescription: any;
    transferAmount: any;
    requestAmountReceiver: any;
    approvalsCount: any;
    isRequestCompleted: any;
    requestID: number;
};

const initialState: ContractInitialStateType = {
    data: [],
    error: '',
    loading: false,
    completed: false,
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
        requests: [],
    },
};

export const contractSlice = createSlice({
    name: 'contracts',
    initialState,
    reducers: {
        onClearContractError: (state) => {
            state.error = '';
        },
        onSetContractError: (state, { payload }) => {
            state.error = payload;
        },
        onResetComplete: (state) => {
            state.completed = false;
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
        builder.addCase(onCreateRequest.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(onCreateRequest.fulfilled, (state) => {
            state.loading = false;
            state.completed = true;
        });
        builder.addCase(onCreateRequest.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = String(payload);
        });
        builder.addCase(onCreateNewContract.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(onCreateNewContract.fulfilled, (state) => {
            state.loading = false;
            state.completed = true;
        });
        builder.addCase(onCreateNewContract.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = String(payload);
        });
    },
});

export const { onClearContractError, onSetContractError, onResetComplete } =
    contractSlice.actions;

export default contractSlice.reducer;
