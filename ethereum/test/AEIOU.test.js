const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const AEIOUCampaign = require("./../build/AEIOUCampaign.json");
const AEIOUCampaignFactory = require("./../build/AEIOUCampaignFactory.json");

let accounts, factory, campaignAddress, campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(AEIOUCampaignFactory.abi)
    .deploy({ data: AEIOUCampaignFactory.evm.bytecode.object })
    .send({ from: accounts[0], gas: "3000000" });

  await factory.methods
    .createCampaign(
      "First Campaign",
      "Campaign Description",
      "Campaign Image URL",
      "100"
    )
    .send({
      from: accounts[0],
      gas: "2000000",
    });

  [campaignAddress] = await factory.methods.getAllCampaigns().call();
  campaign = await new web3.eth.Contract(AEIOUCampaign.abi, campaignAddress);
});

describe("AEIOU Campaigns", () => {
  it("deploys a factory and campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it("marks caller as the campaign manager", async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(manager, accounts[0]);
  });

  it("allows people to contribute and marks them as contributors", async () => {
    await campaign.methods
      .contribute()
      .send({ from: accounts[1], value: "200", gas: "2000000" });

    const isContributor = await campaign.methods
      .contributors(accounts[1])
      .call();

    assert(isContributor);
  });

  it("requires a minimum contribution", async () => {
    try {
      await campaign.methods
        .contribute()
        .send({ from: accounts[1], value: "5", gas: "2000000" });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("allows manager to create request", async () => {
    await campaign.methods
      .createRequest("Request", "Req Desc", accounts[2], "100")
      .send({ from: accounts[0], gas: "2000000" });
    const requests = await campaign.methods.requests(0).call();
    assert.equal("Request", requests.title);
  });

  it("process request", async () => {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: web3.utils.toWei("10", "ether"),
      gas: "2000000",
    });

    await campaign.methods
      .createRequest(
        "Request",
        "Req Desc",
        accounts[2],
        web3.utils.toWei("5", "ether")
      )
      .send({ from: accounts[0], gas: "2000000" });

    await campaign.methods.approveRequest(0).send({
      from: accounts[1],
      gas: "2000000",
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: "2000000",
    });

    let balance = await web3.eth.getBalance(accounts[2]);
    balance = web3.utils.fromWei(balance, "ether");
    balance = parseFloat(balance);
    assert(balance > 104);
  });
});
