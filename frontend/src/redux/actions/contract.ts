import { createAsyncThunk } from '@reduxjs/toolkit';
import AEIOUCampaign from './../../web3/campaign/AEIOUCampaign.json';
import { getFactoryInstance } from './../../web3/factoryInstance';
import web3 from './../../web3/web3';

type AbiItem = any;

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

type CreateContract = {
    name: string;
    description: string;
    imageURL: string;
    minimumContribution: string;
    userWalletAccount: string;
};

export const onGetAllContracts = createAsyncThunk<
    ContractDetails[],
    void,
    { rejectValue: string }
>('contract/getAllContracts', async (_, { rejectWithValue }) => {
    try {
        // getFactory instance
        const aeiouFactory: any = getFactoryInstance();
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
                balance: val[1],
                managerAddress: val[4],
                title: val[5],
                description: val[6],
                imgSource: val[7],
                contractAddress: address,
            };
            data.push(result);
        }
        return data;
    } catch (err) {
        return rejectWithValue(
            'Failed to fetch all contracts. Please reload again.'
        );
    }
});

export const onGetContractByAddress = createAsyncThunk<
    ContractDetails,
    string,
    { rejectValue: string }
>('contract/getContractByAddress', async (address, { rejectWithValue }) => {
    try {
        // getFactory instance
        const abi: AbiItem = AEIOUCampaign.abi;
        // Single contract
        const campaign = await new web3.eth.Contract(abi, address);
        const val = await campaign.methods.getSummary().call();
        const result: ContractDetails = {
            minimumAmount: val[0],
            balance: val[1],
            totalRequest: val[2],
            totalContributors: val[3],
            managerAddress: val[4],
            title: val[5],
            description: val[6],
            imgSource: val[7],
            contractAddress: address,
        };
        return result;
    } catch (err) {
        return rejectWithValue(
            'Failed to fetch contract by address. Please reload again.'
        );
    }
});

export const onCreateNewContract = createAsyncThunk<
    CreateContract,
    CreateContract,
    { rejectValue: string }
>('contract/createNewContract', async (account, { rejectWithValue }) => {
    try {
        // getFactory instance
        let aeiouFactory: any = getFactoryInstance();
        // Fetch all campaigns
        const nC = {
            name: account.name,
            description: account.description,
            imageURL: account.imageURL,
            minimumContribution: account.minimumContribution,
            userWalletAccount: account.userWalletAccount,
        };

        try {
            await aeiouFactory.methods
                .createCampaign(
                    nC.name,
                    nC.description,
                    nC.imageURL,
                    nC.minimumContribution
                )
                .send({
                    from: nC.userWalletAccount,
                });
        } catch (err) {
            console.log('Error:', err);
        }
        return nC;
    } catch (err) {
        return rejectWithValue('Failed to fetch all contracts');
    }
});
