const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
    // Address of the whitelist contract that you deployed in the previous module
    const whitelistContract = "0xC310DdB6f937c727c9a648768284801f0Ec84811";
    // URL from where we can extract the metadata for a Crypto Dev NFT
    const metadataURL = "ipfs://QmQy1J6nUcUvNTPYivtNxfKdr1cJgDNdQhErKPFepmx5Ge/";
    /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
    */
    const cryptoDevsContract = await ethers.getContractFactory("CyberPunks");

    // deploy the contract
    const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
        metadataURL,
        whitelistContract
    );

    await deployedCryptoDevsContract.deployed();

    // print the address of the deployed contract
    console.log(
        "CyberPunks Contract Address:",
        deployedCryptoDevsContract.address
    );
}

// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });