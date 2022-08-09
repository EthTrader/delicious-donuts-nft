const governanceScores = require("../json/input-governance.json");
const fs = require('fs');
const fsPromises = fs.promises;


async function generateList() {
    
    let nftList = [];
    let totalNFTs = 0;
    let userCount = 0;

    for (user of governanceScores) {
        // Loop through users and assign how many NFTs each user recieves
        let nftCount = 0;
        if (user.weight >= 500) {
            nftCount++;
        }
        if (user.weight >= 5000) {
            nftCount++;
        }
        if (user.weight >= 50000) {
            nftCount++;
        }
        if (user.weight >= 100000) {
            nftCount++;
        }
        if (user.weight >= 500000) {
            nftCount++;
        }
        
        nftList.push({"address":user.address, "nftCount":nftCount, "governanceScore":user.weight});
        if (nftCount > 0) {
            totalNFTs += nftCount;
            userCount++;
        }
    }

    console.log("Total NFTs to Mint: ", totalNFTs);
    console.log("Total Users Receiving NFTs: ", userCount);

    await fsPromises.writeFile('json/output-nft-list.json', JSON.stringify(nftList));

}

generateList();
