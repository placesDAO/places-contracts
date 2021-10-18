setup:
	@echo [setup]
	@npm install -g truffle
	@npm install @truffle/hdwallet-provider
	@npm install truffle-contract-size
	@npm install -D truffle-plugin-verify

build-contracts:
	@echo [building]
	@truffle compile

deploy-contracts-dev:
	@echo [deploying localhost…]
	@truffle migrate --network development --skip-dry-run --reset
	@truffle networks

deploy-contracts-rinkeby:
	@echo [deploying rinkeby…]
	@truffle migrate --network rinkeby --skip-dry-run --reset
	@truffle networks

measure-contracts:
	@echo [measuring…]
	@truffle run contract-size

test-contracts:
	@echo [running tests…]
	@truffle test --network development

verify-contracts-rinkeby:
	@echo [verifying rinkeby…]
	@truffle run verify Places --network rinkeby
	@truffle run verify PlacesDescriptor --network rinkeby
	@truffle run verify PlacesProvider --network rinkeby

verify-contracts:
	@echo [verifying mainnet…]
	@truffle run verify Places --network main
	@truffle run verify PlacesDescriptor --network main
	@truffle run verify PlacesProvider --network main

.PHONY: setup build-contracts deploy-contracts-dev deploy-contracts-rinkeby measure-contracts test-contracts verify-contracts-rinkeby verify-contracts
