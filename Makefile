## Ethereum Commands
##
## Install ethereum dependencies on your local machine.
setup-eth-libs: 
	cd ethereum; npm install; cd ..

## Compile solidity smart contract
compile-eth-contract:
	cd ethereum; npm run compile; cd ..

## Test solidity smart contract
test-eth-contract:
	cd ethereum; npm run test; cd ..

## Deploy solidity smart contract
deploy-eth-contract:
	cd ethereum; npm run deploy; cd ..
##
## ------


## Application Commands
setup-ui-libs: 
	cd frontend; npm install; cd ..

run-ui: 
	cd frontend; npm start; cd ..

build-ui: 
	cd frontend; npm run build; cd ..
##
## ------