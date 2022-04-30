import web3 from './web3';
import AEIOUCampaignFactory from './campaign/AEIOUCampaignFactory.json';

type AbiItem = any;

let factory: {} = {};

async function initiateFactoryInstance() {
    const abi: AbiItem = AEIOUCampaignFactory.abi;
    factory = await new web3.eth.Contract(
        abi,
        process.env.REACT_APP_CAMPAIGN_ADDRESS
    );
}

initiateFactoryInstance();

export default function getFactoryInstance() {
    return factory;
}
