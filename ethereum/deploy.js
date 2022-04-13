const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const AEIOUCampaignFactory = require("./build/AEIOUCampaignFactory.json");

require("dotenv").config();
const provider = new HDWalletProvider(
  process.env.WALLET_SECRET,
  process.env.INFURA_LINK
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const deployAccount = accounts[0];
  console.log("Deploying with account :", deployAccount);

  const factory = await new web3.eth.Contract(AEIOUCampaignFactory.abi)
    .deploy({ data: AEIOUCampaignFactory.evm.bytecode.object })
    .send({ from: deployAccount, gas: "3000000" });

  console.log(
    "AEIOU Campaign Factory Contract Address :",
    factory.options.address
  );

  provider.engine.stop();
};

deploy();
