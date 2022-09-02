const nftList = require("../json/01-output-nft-list.json");
const axios = require("axios");
const fs = require('fs');
const fsPromises = fs.promises;

async function mint() {
  let nftMinted = 0;
  let usersMinted = 0;
  let output = [];
  let reportMetadata = [];

  for (user of nftList) {
    // Loop through NFT list and generate metadata for each user
    userNFTList = [];
    for (let i = 0; i < user.nftCount; i++) {
      // Create Metadata
      let deliciousDonutId = await determineDeliciousDonutId(userNFTList);
      userNFTList.push(deliciousDonutId);

      // Update reports and output
      output.push({ "address": user.address, "deliciousDonutId": deliciousDonutId });

      nftMinted++;
      if (i == 0) {
        usersMinted++;
      }
    }
  }

  await fsPromises.writeFile('../json/02-output-address-donut-list.json', JSON.stringify(output));

  await consoleReport(output, nftMinted, usersMinted);
}

async function consoleReport(reportMetadata, nftMinted, usersMinted) {
    console.log("Total NFTs Minted: ", nftMinted);
    console.log("Total Users Receiving NFTs: ", usersMinted);
    console.log(
      "#1: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 1).length
    );
    console.log(
      "#2: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 2).length
    );
    console.log(
      "#3: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 3).length
    );
    console.log(
      "#4: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 4).length
    );
    console.log(
      "#5: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 5).length
    );
    console.log(
      "#6: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 6).length
    );
    console.log(
      "#7: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 7).length
    );
    console.log(
      "#8: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 8).length
    );
    console.log(
      "#9: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 9).length
    );
    console.log(
      "#10: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 10).length
    );
    console.log(
      "#11: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 11).length
    );
    console.log(
      "#12: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 12).length
    );
    console.log(
      "#13: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 13).length
    );
    console.log(
      "#14: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 14).length
    );
    console.log(
      "#15: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 15).length
    );
    console.log(
      "#16: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 16).length
    );
    console.log(
      "#17: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 17).length
    );
    console.log(
      "#18: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 18).length
    );
    console.log(
      "#19: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 19).length
    );
    console.log(
      "#20: ",
      reportMetadata.filter((obj) => obj.deliciousDonutId == 20).length
    );
}

async function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function determineDeliciousDonutId(userNFTList) {
  // Randomly select which NFT user receives
  let random = Math.random() * 100;

  let deliciousDonutId;
  // Common
  if (random <= 68) {
    deliciousDonutId = await randomIntFromInterval(1, 11);
  }
  // Uncommon
  else if (random <= 92) {
    deliciousDonutId = await randomIntFromInterval(12, 17);
  }
  // Rare
  else if (random <= 100) {
    deliciousDonutId = await randomIntFromInterval(18, 20);
  }

  // Do not let the user get the same NFT twice.  If present, increment by 1 
  while (userNFTList.includes(deliciousDonutId)) {
    deliciousDonutId++;
    if (deliciousDonutId > 20) {
      deliciousDonutId = 1;
    }
  }

  return deliciousDonutId;
}

mint();
