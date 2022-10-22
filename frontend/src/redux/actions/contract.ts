import { createAsyncThunk } from '@reduxjs/toolkit';
import AEIOUCampaign from './../../data/AEIOUCampaign.json';
import AEIOUCampaignFactory from './../../data/AEIOUCampaignFactory.json';

type AbiItem = any;

type Request = {
    requestID: number;
    requestTitle: any;
    requestDescription: any;
    transferAmount: any;
    requestAmountReceiver: any;
    approvalsCount: any;
    isRequestCompleted: any;
};

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
    contributors?: string[];
};

type CreateRequest = {
    campaignAddress: string;
    userAddress: string;
    title?: string;
    desc?: string;
    receiver?: string;
    amount?: string;
    requestID?: number;
};

type CreateContract = {
    name: string;
    description: string;
    imageURL: string;
    minimumContribution: string;
    targetAmount: string;
    userWalletAccount: string;
};

export const onGetAllContracts = createAsyncThunk<
    ContractDetails[],
    any,
    { rejectValue: string }
>('contract/getAllContracts', async (web3, { rejectWithValue }) => {
    try {
        // getFactory instance
        const aeiouFactory: any = await new web3.eth.Contract(
            AEIOUCampaignFactory.abi,
            process.env.REACT_APP_CAMPAIGN_ADDRESS
        );
        const abi: AbiItem = AEIOUCampaign.abi;

        // Result array
        const data: ContractDetails[] = [];

        // Fetch all campaigns
        const campaigns: string[] = await aeiouFactory.methods
            .getAllCampaigns()
            .call();

        for (const address of campaigns) {
            // Single contract
            const campaign = await new web3.eth.Contract(abi, address);
            const val = await campaign.methods.getSummary().call();
            const result: ContractDetails = {
                balance: val[2],
                managerAddress: val[5],
                title: val[6],
                description: val[7],
                imgSource: val[8],
                contractAddress: address,
            };
            data.push(result);
        }
        return data;
    } catch (err) {
        return rejectWithValue(
            'Failed to fetch all contracts. Please reload again. ' + err
        );
    }
});

export const onGetContractByAddress = createAsyncThunk<
    ContractDetails,
    { address: string; web3: any },
    { rejectValue: string }
>(
    'contract/getContractByAddress',
    async ({ address, web3 }, { rejectWithValue }) => {
        try {
            // getFactory instance
            const abi: AbiItem = AEIOUCampaign.abi;
            // Single contract
            const campaign = await new web3.eth.Contract(abi, address);
            const val = await campaign.methods.getSummary().call();

            const requests: Request[] = [];
            for (let i = 0; i < val[3]; i++) {
                const requestData = await campaign.methods.requests(i).call();
                const request: Request = {
                    requestID: i,
                    requestTitle: requestData.title,
                    requestDescription: requestData.description,
                    transferAmount: requestData.amount,
                    requestAmountReceiver: requestData.receiver,
                    approvalsCount: requestData.approvalsCount,
                    isRequestCompleted: requestData.completed,
                };
                requests.push(request);
            }

            const contributors: string[] = [];
            for (let i = 0; i < val[4]; i++) {
                const contributorAdd: string = await campaign.methods
                    .contributorsList(i)
                    .call();
                contributors.push(contributorAdd.toLowerCase());
            }

            const result: ContractDetails = {
                minimumAmount: val[0],
                targetAmount: val[1],
                balance: val[2],
                totalRequest: val[3],
                totalContributors: val[4],
                managerAddress: val[5],
                title: val[6],
                description: val[7],
                imgSource: val[8],
                contractAddress: address,
                requests,
                contributors,
            };
            return result;
        } catch (err) {
            return rejectWithValue(
                'Failed to fetch contract by address. Please reload again. ' +
                    err
            );
        }
    }
);

export const onContribute = createAsyncThunk<
    void,
    { camp: CreateRequest; web3: any },
    { rejectValue: string }
>('contract/contribute', async ({ camp, web3 }, { rejectWithValue }) => {
    try {
        // getFactory instance
        const abi: AbiItem = AEIOUCampaign.abi;
        // Single contract
        const campaign = await new web3.eth.Contract(abi, camp.campaignAddress);
        await campaign.methods
            .contribute()
            .send({ from: camp.userAddress, value: camp.amount });
    } catch (err) {
        return rejectWithValue(
            'Failed to contribute. Please try again. ' + err
        );
    }
});

export const onApproveRequest = createAsyncThunk<
    void,
    { camp: CreateRequest; web3: any },
    { rejectValue: string }
>('contract/approveRequest', async ({ camp, web3 }, { rejectWithValue }) => {
    try {
        // getFactory instance
        const abi: AbiItem = AEIOUCampaign.abi;
        // Single contract
        const campaign = await new web3.eth.Contract(abi, camp.campaignAddress);
        await campaign.methods
            .approveRequest(camp.requestID)
            .send({ from: camp.userAddress });
    } catch (err) {
        return rejectWithValue(
            "Failed to contribute. Please make sure you haven't approved already."
        );
    }
});

export const onFinalizeRequest = createAsyncThunk<
    void,
    { camp: CreateRequest; web3: any },
    { rejectValue: string }
>('contract/finalizeRequest', async ({ camp, web3 }, { rejectWithValue }) => {
    try {
        // getFactory instance
        const abi: AbiItem = AEIOUCampaign.abi;
        // Single contract
        const campaign = await new web3.eth.Contract(abi, camp.campaignAddress);
        await campaign.methods
            .finalizeRequest(camp.requestID)
            .send({ from: camp.userAddress });
    } catch (err) {
        return rejectWithValue(
            'Failed to contribute. Please try again. ' + err
        );
    }
});

export const onCreateRequest = createAsyncThunk<
    void,
    { camp: CreateRequest; web3: any },
    { rejectValue: string }
>('contract/createRequest', async ({ camp, web3 }, { rejectWithValue }) => {
    try {
        // getFactory instance
        const abi: AbiItem = AEIOUCampaign.abi;
        // Single contract
        const campaign = await new web3.eth.Contract(abi, camp.campaignAddress);
        await campaign.methods
            .createRequest(camp.title, camp.desc, camp.receiver, camp.amount)
            .send({ from: camp.userAddress });
    } catch (err) {
        return rejectWithValue(
            'Failed to create new request. Please reload again. ' + err
        );
    }
});

export const onCreateNewContract = createAsyncThunk<
    CreateContract,
    { account: CreateContract; web3: any },
    { rejectValue: string }
>(
    'contract/createNewContract',
    async ({ account, web3 }, { rejectWithValue }) => {
        try {
            // getFactory instance
            let aeiouFactory: any = await new web3.eth.Contract(
                AEIOUCampaignFactory.abi,
                process.env.REACT_APP_CAMPAIGN_ADDRESS
            );
            // Fetch all campaigns
            const nC: CreateContract = {
                name: account.name,
                description: account.description,
                imageURL: account.imageURL,
                minimumContribution: account.minimumContribution,
                targetAmount: account.targetAmount,
                userWalletAccount: account.userWalletAccount,
            };
            await aeiouFactory.methods
                .createCampaign(
                    nC.name,
                    nC.description,
                    nC.imageURL,
                    nC.minimumContribution,
                    nC.targetAmount
                )
                .send({
                    from: nC.userWalletAccount,
                });
            return nC;
        } catch (err) {
            return rejectWithValue('Failed to create new contract! ' + err);
        }
    }
);
