const nftList = require("../json/output-nft-list.json");
const privateKeyJSON = require("../secrets/privateKey.json");
const nftStorageAPIKeyJSON = require("../secrets/nftStorage.json");
const nftContractABI = require("../abi/abi.json");
const axios = require("axios");

async function mint() {

    let nftMinted = 0;
    let usersMinted = 0;
    let totalMetadata = [];

    for (user of nftList) {
        // Loop through NFT list and mint NFTs 
        for (let i = 0; i < user.nftCount; i++) {
            // Create Metadata
            let metadata = await generateMetadata();
            totalMetadata.push(metadata);

            // Push Metadata to IPFS via NFT.Storage
            //let metadataPath = await pinMetadata(); 

            // // Create provider & wallet
            // let privateKey = privateKeyJSON.privateKey;
            // let provider = new ethers.providers.JsonRpcProvider("https://rpc.gnosischain.com/");
            // let wallet = new ethers.Wallet(privateKey, provider);

            // // Create contract instance
            // let nftContractAddress = "";
            // let nftContract = new ethers.Contract(nftContractAddress, nftContractABI, wallet);

            // // Call mint function on contract
            // let transactionOptions = { gasPrice: 5000000000, gasLimit : 300000 };
            // let contractPromise = await nftContract.mint(user.address);

            // // Wait for confirmation
            // let receipt = await contractPromise.wait();

            // Update report
            nftMinted++;
            if (i == 0) {
                usersMinted++;
            }
        }
    }

    console.log("Total NFTs Minted: ", nftMinted);
    console.log("Total Users Receiving NFTs: ", usersMinted);
    console.log("#1: ", totalMetadata.filter((obj) => obj.attributes.deliciousDonutId == 1).length);
    console.log("#2: ", totalMetadata.filter((obj) => obj.attributes.deliciousDonutId == 2).length);
    console.log("#3: ", totalMetadata.filter((obj) => obj.attributes.deliciousDonutId == 3).length);
    console.log("#4: ", totalMetadata.filter((obj) => obj.attributes.deliciousDonutId == 4).length);
    console.log("#5: ", totalMetadata.filter((obj) => obj.attributes.deliciousDonutId == 5).length);
    console.log("#6: ", totalMetadata.filter((obj) => obj.attributes.deliciousDonutId == 6).length);
    console.log("#7: ", totalMetadata.filter((obj) => obj.attributes.deliciousDonutId == 7).length);
    console.log("#8: ", totalMetadata.filter((obj) => obj.attributes.deliciousDonutId == 8).length);
    console.log("#9: ", totalMetadata.filter((obj) => obj.attributes.deliciousDonutId == 9).length);
    console.log("#10: ", totalMetadata.filter((obj) => obj.attributes.deliciousDonutId == 10).length);
    console.log("#11: ", totalMetadata.filter((obj) => obj.attributes.deliciousDonutId == 11).length);
    console.log("#12: ", totalMetadata.filter((obj) => obj.attributes.deliciousDonutId == 12).length);
    console.log("#13: ", totalMetadata.filter((obj) => obj.attributes.deliciousDonutId == 13).length);
}

async function generateMetadata() {
    let metadata = {};

    metadata.external_url = "https://donut-dashboard.com/#/delicious-donuts";
    metadata.attributes = [];

    // Randomly select which NFT user receives
    let random = Math.random() * 100;
    if (random <= 9) {
        metadata.attributes.deliciousDonutId = 1;
        metadata.image = "";
        metadata.name = "";
        metadata.description = "";
    }
    else if (random <= 18) {
        metadata.attributes.deliciousDonutId = 2;
        metadata.image = "";
        metadata.name = "";
        metadata.description = "";
    }
    else if (random <= 27) {
        metadata.attributes.deliciousDonutId = 3;
        metadata.image = "";
        metadata.name = "";
        metadata.description = "";
    }
    else if (random <= 36) {
        metadata.attributes.deliciousDonutId = 4;
        metadata.image = "";
        metadata.name = "";
        metadata.description = "";
    }
    else if (random <= 45) {
        metadata.attributes.deliciousDonutId = 5;
        metadata.image = "";
        metadata.name = "";
        metadata.description = "";
    }
    else if (random <= 54) {
        metadata.attributes.deliciousDonutId = 6;
        metadata.image = "";
        metadata.name = "";
        metadata.description = "";
    }
    else if (random <= 63) {
        metadata.attributes.deliciousDonutId = 7;
        metadata.image = "";
        metadata.name = "";
        metadata.description = "";
    }
    else if (random <= 72) {
        metadata.attributes.deliciousDonutId = 8;
        metadata.image = "";
        metadata.name = "";
        metadata.description = "";
    }
    else if (random <= 81) {
        metadata.attributes.deliciousDonutId = 9;
        metadata.image = "";
        metadata.name = "";
        metadata.description = "";
    }
    else if (random <= 90) {
        metadata.attributes.deliciousDonutId = 10;
        metadata.image = "";
        metadata.name = "";
        metadata.description = "";
    }
    else if (random <= 93.333) {
        metadata.attributes.deliciousDonutId = 11;
        metadata.image = "";
        metadata.name = "";
        metadata.description = "";
    }
    else if (random <= 96.666) {
        metadata.attributes.deliciousDonutId = 12;
        metadata.image = "";
        metadata.name = "";
        metadata.description = "";
    }
    else if (random <= 100) {
        metadata.attributes.deliciousDonutId = 13;
        metadata.image = "";
        metadata.name = "";
        metadata.description = "";
    }

    return metadata;
}

async function pinMetadata() {
    try {
        let apiKey = nftStorageAPIKeyJSON.apiKey;

        const endpoint = "https://api.nft.storage";
    
        let headers = {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        }

        let req = await axios.post(`$endpoint/upload`, JSON.stringify(metadata), { headers });

        if (req.status = 200 && req.data.ok) {
            let metadataPath = `https://nftstorage.link/ipfs/${req.data.value.cid}`;
            return metadataPath;
        }
    }
    catch (e) {
        console.log(e);
    }
}

mint();
