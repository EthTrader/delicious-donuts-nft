const addressDonutList = require("../json/02-output-address-donut-list.json");
const privateKeyJSON = require("../secrets/privateKey.json");
const nftStorageAPIKeyJSON = require("../secrets/nftStorage.json");
const nftContractABI = require("../abi/abi.json");
const axios = require("axios");

async function mint() {

    let nftMinted = 0;

    // Loop through address/donut list and mint an NFT for each entry
    for (entry of addressDonutList) {
        // Create provider & wallet
        let privateKey = privateKeyJSON.privateKey;
        let provider = new ethers.providers.JsonRpcProvider("https://rpc.gnosischain.com/");
        let wallet = new ethers.Wallet(privateKey, provider);

        // Create contract instance
        let nftContractAddress = "0x95Ff6c96De46bFb9a385Ec2e0828F96096EAd507";
        let nftContract = new ethers.Contract(nftContractAddress, nftContractABI, wallet);

        // Get token URI
        let tokenURI = getTokenURI(entry.deliciousDonutId);

        console.log("Minting NFT #: ", nftMinted + 1, " | Address: ", entry.address, " | Delicious Donut Id #: ", entry.deliciousDonutId);

        // Call mint function on contract
        let transactionOptions = { gasPrice: 2500000000, gasLimit : 300000 };
        let contractPromise = await nftContract.mint(entry.address, tokenURI, transactionOptions);

        // Wait for confirmation
        await contractPromise.wait();

        // Update report
        nftMinted++;
    }

    console.log("Total NFTs Minted: ", nftMinted);
}

async function getTokenURI(deliciousDonutId) {
    switch (deliciousDonutId) {
        case 1:
            return "";
        case 2:
            return "";
        case 3:
            return "";
        case 4:
            return "";
        case 5:
            return "";
        case 6:
            return "";
        case 7:
            return "";
        case 8:
            return "";
        case 9:
            return "";
        case 10:
            return "";
        case 11:
            return "";
        case 12:
            return "";
        case 13:
            return "";
        case 14:
            return "";
        case 15:
            return "";
        case 16:
            return "";
        case 17:
            return "";
        case 18:
            return "";
        case 19:
            return "";
        case 20:
            return "";
    }
}

mint();
