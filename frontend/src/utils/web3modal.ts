import WalletConnect from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';

const providerOptions = {
    walletconnect: {
        package: WalletConnect,
        options: {
            infuraId: process.env.REACT_APP_WEB3_PROVIDER,
        },
    },
};

const web3Modal = new Web3Modal({
    providerOptions,
});

export default web3Modal;
