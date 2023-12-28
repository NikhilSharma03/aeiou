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
.PHONY: setup-ui-libs
setup-ui-libs: 
	cd ui; npm install; cd ..

.PHONY: run-ui-dev
run-ui-dev: 
	cd ui; npm start; cd ..

.PHONY: build-ui
build-ui: 
	cd ui; npm run build; cd ..