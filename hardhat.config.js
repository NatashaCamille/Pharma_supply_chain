require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "YOUR_SEPOLIA_RPC_URL", // using Sepolia
      accounts: ["YOUR_PRIVATE_KEY"] 
    }
  }
};



