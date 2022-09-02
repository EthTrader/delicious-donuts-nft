const metadataList = require("../json/02-output-address-metadata-list.json");
const nftStorageAPIKeyJSON = require("../secrets/nftStorage.json");
const axios = require("axios");
const fs = require('fs');
const fsPromises = fs.promises;

async function mint() {
  let metadataPushed = 0;
  let readyToMintList = [];

  for (user of metadataList) {
      // Push Metadata to IPFS via NFT.Storage
      let metadataPath = await pinMetadata(user);
      readyToMintList.push({ "address": user.address, "metadata": metadata, "metadataPath": metadataPath });

      // Update report
      metadataPushed++;

      console.log("Metadata Complete: ", metadataPushed)
      await sleep(2000);
  }

  await fsPromises.writeFile('../json/03-output-ready-to-mint-list.json', JSON.stringify(readyToMintList));
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function pinMetadata(user) {
  try {
    let apiKey = nftStorageAPIKeyJSON.apiKey;

    const endpoint = "https://api.nft.storage";

    let headers = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    };

    let req = await axios.post(`$endpoint/upload`, JSON.stringify(user.metadata), {
      headers,
    });

    if ((req.status = 200 && req.data.ok)) {
      let metadataPath = `https://nftstorage.link/ipfs/${req.data.value.cid}`;
      return metadataPath;
    }
  } catch (e) {
    console.log("NFT Storage Error | ", user.address);
    console.log(e);
    console.log(user.metadata);
  }
}

mint();
