# AEIOU

<div align="center">  
<br>

<img width=100% src="https://github.com/NikhilSharma03/AEIOU/blob/main/assets/banner.png"></p>

</div>

<div align="center">  
<br>
 
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=95)](https://github.com/NikhilSharma03/DevMind) 
[![Build by Nikhil](https://img.shields.io/badge/Built%20by-Nikhil-Green)](https://github.com/NikhilSharma03/DevMind)

</div>

<br>

<h3 align="center">🌟 AEIOU is a Crowdfunding Platform Powered by Ethereum Blockchain 🚀</h3>

<br>

## Technology Stack

<h3 align="center">Languages and Library</h3>

<div align="center">

<img alt="TS" src="https://img.shields.io/badge/typescript%20-%23323330.svg?&style=for-the-badge&logo=typescript"/>
<img alt="Solidity" src="https://img.shields.io/badge/solidity%20-%23323330.svg?&style=for-the-badge&logo=solidity"/>
<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img alt="Redux" src="https://img.shields.io/badge/redux%20-%23323330.svg?&style=for-the-badge&logo=redux&logoColor=764abc"/>
<img alt="Web3" src="https://img.shields.io/badge/web3.js%20-%23323330.svg?&style=for-the-badge&logo=web3.js&logoColor=%23F7DF1E"/>
<img alt="CSS3" 
src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>

</div>

<br>

<h3 align="center">Project Management Tools</h3>

<div align="center">

<img alt="GitHub" src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>

</div>

<br>

## Setup and Installation

First install contract dependencies

```
make setup-contract-libs
```

After making changes to Smart Contract, Compile solidity smart contract

```
make compile-contract
```

After compiling, test solidity smart contract

```
make test-contract
```

After tests runs successfully, you are set to deploy the application.

For that first add `Environment Variables` by creating a new `.env` file in `contract` folder and add the contents following `.env.example`

Once you have added correct credentials, deploy the smart contract

```
make deploy-contract
```

Once you have successfully deployed the smart contract, you will find the address of your deployed smart contract in the terminal, copy that as it will be required in frontend to interact with your smart contract

The live application is using contract deployed at `0x0dcba90ec9a960d72fdee71aee694e975fffeeed`

<br>

Now, Lets start by installing ui dependencies

```
make setup-ui-libs
```

Now add `Environment Variables` by creating a new `.env` file in `ui` folder and add the contents following `.env.example`

Now, Run the ui

```
make run-ui-dev
```

now the application is running at `localhost:3000`

To build the ui

```
make build-ui
```

<br>

# License

<div align="center">  
<br>

<img width=35% src="https://media0.giphy.com/media/3ornjXbo3cjqh2BIyY/200.gif"></p>

<br>
</div>
