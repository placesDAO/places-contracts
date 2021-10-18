require("babel-register");
require("babel-polyfill");

require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { API_URL_RINKEBY, API_URL_MAIN, MNEMONIC, ETHERSCAN_API_KEY } =
  process.env;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(MNEMONIC, API_URL_RINKEBY);
      },
      network_id: 4,
      skipDryRun: true,
      gas: 25000000,
      gasPrice: 20000000000, // 20 ETH
    },
    main: {
      provider: function () {
        return new HDWalletProvider(MNEMONIC, API_URL_MAIN);
      },
      network_id: 1,
      skipDryRun: true,
      gas: 25000000,
      gasPrice: 20000000000, // 20 ETH
    },
  },
  contracts_directory: "./contracts/",
  contracts_build_directory: "./abis/",
  compilers: {
    solc: {
      version: ">=0.8.0 <0.9.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000,
        },
      },
    },
  },
  plugins: ["truffle-contract-size", "truffle-plugin-verify"],
  api_keys: {
    etherscan: ETHERSCAN_API_KEY,
  },
};
