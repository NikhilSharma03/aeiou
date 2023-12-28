## AEIOU Solidity contract commands

.PHONY: setup-contract-libs
setup-contract-libs: 
	cd contract; npm install; cd ..

.PHONY: compile-contract
compile-contract:
	cd contract; npm run compile; cd ..

.PHONY: test-contract
test-contract:
	cd contract; npm run test; cd ..

.PHONY: deploy-contract
deploy-contract:
	cd contract; npm run deploy; cd ..

## UI app commands

setup-ui-libs: 
	cd frontend; npm install; cd ..

run-ui: 
	cd frontend; npm start; cd ..

build-ui: 
	cd frontend; npm run build; cd ..