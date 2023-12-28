const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

const abiPath = path.resolve(__dirname, '..', 'abi')

console.log('Started compiling contract...')
console.log('Removing current abi directory...')

fs.removeSync(abiPath)
fs.ensureDirSync(abiPath)

console.log('Reading solidity contract...')

const aeiouContractPath = path.resolve(__dirname, '..', 'core', 'AEIOU.sol')
const aeiouContractSource = fs.readFileSync(aeiouContractPath, 'utf-8')

const input = {
  language: 'Solidity',
  sources: {
    'AEIOU.sol': {
      content: aeiouContractSource,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
}

console.log('Compiling solidity contract...')

const output = JSON.parse(solc.compile(JSON.stringify(input)))
const abiOutput = output.contracts['AEIOU.sol']

console.log('Creating AEIOU contract abi...')

for (const contractName in abiOutput) {
  fs.outputJsonSync(
    path.resolve(abiPath, contractName + '.json'),
    abiOutput[contractName]
  )
}

console.log('Completed compiling contact. ABI are saved in abi directory.')
