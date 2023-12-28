const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

const web3 = new Web3(ganache.provider())

const AEIOUCampaign = require('./../abi/AEIOUCampaign.json')
const AEIOUCampaignFactory = require('./../abi/AEIOUCampaignFactory.json')

let accounts, factoryInstance, campaignInstance

before(async () => {
  accounts = await web3.eth.getAccounts()

  factoryInstance = await new web3.eth.Contract(AEIOUCampaignFactory.abi)
    .deploy({ data: AEIOUCampaignFactory.evm.bytecode.object })
    .send({ from: accounts[0], gas: '3000000' })

  await factoryInstance.methods
    .createCampaign(
      'Test Name',
      'Test Description',
      'Test Image',
      '100',
      '1000'
    )
    .send({
      from: accounts[0],
      gas: '2000000',
    })

  const [campaignAddress] = await factoryInstance.methods
    .getAllCampaigns()
    .call()

  campaignInstance = new web3.eth.Contract(AEIOUCampaign.abi, campaignAddress)
})

describe('AEIOU Campaigns', () => {
  it('deploys a factory and campaign', () => {
    assert.ok(factoryInstance.options.address)
    assert.ok(campaignInstance.options.address)
  })

  it('marks caller as the campaign manager', async () => {
    const manager = await campaignInstance.methods.manager().call()
    assert.equal(manager, accounts[0])
  })

  it('allows people to contribute and marks them as contributors', async () => {
    await campaignInstance.methods
      .contribute()
      .send({ from: accounts[1], value: '200', gas: '2000000' })

    const isContributor = await campaignInstance.methods
      .contributors(accounts[1])
      .call()

    assert(isContributor)
  })

  it('requires a minimum contribution', async () => {
    try {
      await campaignInstance.methods
        .contribute()
        .send({ from: accounts[2], value: '5', gas: '2000000' })

      assert(false)
    } catch (err) {
      assert(err)
    }
  })

  it('allows manager to create request', async () => {
    await campaignInstance.methods
      .createRequest('Request', 'Req Desc', accounts[3], '100')
      .send({ from: accounts[0], gas: '2000000' })

    const requests = await campaignInstance.methods.requests(0).call()

    assert.equal('Request', requests.title)
  })

  it('process request', async () => {
    await campaignInstance.methods.contribute().send({
      from: accounts[2],
      value: web3.utils.toWei('10', 'ether'),
      gas: '2000000',
    })

    await campaignInstance.methods
      .createRequest(
        'Request',
        'Req Desc',
        accounts[4],
        web3.utils.toWei('5', 'ether')
      )
      .send({ from: accounts[0], gas: '2000000' })

    await campaignInstance.methods.approveRequest(1).send({
      from: accounts[1],
      gas: '2000000',
    })

    await campaignInstance.methods.approveRequest(1).send({
      from: accounts[2],
      gas: '2000000',
    })

    await campaignInstance.methods.finalizeRequest(1).send({
      from: accounts[0],
      gas: '2000000',
    })

    let balance = await web3.eth.getBalance(accounts[4])
    balance = web3.utils.fromWei(balance, 'ether')
    balance = parseFloat(balance)
    assert(balance > 104)
  })
})
