const Web3 = require("web3");
const AEIOUCampaignFactory = require("./build/AEIOUCampaignFactory.json");

require("dotenv").config();

const deploy = async () => {
  // Configuring the connection to an Ethereum node
  const web3 = new Web3(
    new Web3.providers.HttpProvider(process.env.INFURA_LINK)
  );

  // Creating a signing account from a private key
  const signer = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
  web3.eth.accounts.wallet.add(signer);

  // Using the signing account to deploy the contract
  const contract = new web3.eth.Contract(AEIOUCampaignFactory.abi);
  contract.options.data = AEIOUCampaignFactory.evm.bytecode.object;

  const deployTx = contract.deploy();
  const deployedContract = await deployTx
    .send({
      from: signer.address,
      gas: await deployTx.estimateGas(),
    })
    .once("transactionHash", (txhash) => {
      console.log(txhash);
    });

  // The contract is now deployed on chain!
  console.log(`Contract deployed at ${deployedContract.options.address}`);
};

deploy();
