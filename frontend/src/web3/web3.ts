import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
} else {
    const providerURL: string = String(process.env.REACT_APP_WEB3_PROVIDER);
    const provider = new Web3.providers.HttpProvider(providerURL);
    web3 = new Web3(provider);
}

export default web3;
