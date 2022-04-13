const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// Remove existing (if there's any) build folder
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "AEIOU.sol");
const source = fs.readFileSync(campaignPath, "utf-8");

// Compile
const input = {
  language: "Solidity",
  sources: {
    "AEIOU.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

const outputContracts = output.contracts["AEIOU.sol"];
// Creating build folder
fs.ensureDirSync(buildPath);

for (const contractName in outputContracts) {
  fs.outputJsonSync(
    path.resolve(buildPath, contractName + ".json"),
    outputContracts[contractName]
  );
}
