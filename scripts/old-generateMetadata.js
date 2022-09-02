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
      let metadata = await generateMetadata(userNFTList);
      userNFTList.push(metadata.attributes[0].value);

      // Update reports and output
      reportMetadata.push(metadata);
      output.push({ "address": user.address, "metadata": metadata });

      nftMinted++;
      if (i == 0) {
        usersMinted++;
      }
    }
  }

  await fsPromises.writeFile('../json/02-output-address-metadata-list.json', JSON.stringify(output));

  await consoleReport(reportMetadata, nftMinted, usersMinted);
}

async function consoleReport(reportMetadata, nftMinted, usersMinted) {
    console.log("Total NFTs Minted: ", nftMinted);
    console.log("Total Users Receiving NFTs: ", usersMinted);
    console.log(
      "#1: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 1).length
    );
    console.log(
      "#2: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 2).length
    );
    console.log(
      "#3: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 3).length
    );
    console.log(
      "#4: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 4).length
    );
    console.log(
      "#5: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 5).length
    );
    console.log(
      "#6: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 6).length
    );
    console.log(
      "#7: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 7).length
    );
    console.log(
      "#8: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 8).length
    );
    console.log(
      "#9: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 9).length
    );
    console.log(
      "#10: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 10).length
    );
    console.log(
      "#11: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 11).length
    );
    console.log(
      "#12: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 12).length
    );
    console.log(
      "#13: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 13).length
    );
    console.log(
      "#14: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 14).length
    );
    console.log(
      "#15: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 15).length
    );
    console.log(
      "#16: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 16).length
    );
    console.log(
      "#17: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 17).length
    );
    console.log(
      "#18: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 18).length
    );
    console.log(
      "#19: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 19).length
    );
    console.log(
      "#20: ",
      reportMetadata.filter((obj) => obj.attributes[0].value == 20).length
    );
}

async function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function generateMetadata(userNFTList) {
  let metadata = {};

  metadata.external_url = "https://donut-dashboard.com/#/delicious-donuts";
  metadata.attributes = [];

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

  // Create metadata based off of deliciousDonutId
  let idAttribute = { "trait_type": "Donut Number", "value": deliciousDonutId };
  metadata.attributes.push(idAttribute);
  metadata.external_url = "https://donut-dashboard.com/#/delicious-donuts";

  switch (deliciousDonutId) {
    case 1:
      metadata.image = "https://bafybeif54hramczsrhjatwxo7h44bgeevkyggnhekou347da5muwvcu3va.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #01: Sunshine Donut";
      metadata.description = "Delicious Donuts #01: Sunshine Donut";
      metadata.attributes.rarity = "Common";
      break;
    case 2:
      metadata.image = "https://bafybeigjc353bbawzjmhyt7igzcksojvuhj74n4s5nph4fzkckbhslez54.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #02: Glazed Pink Donut";
      metadata.description = "Delicious Donuts #02: Glazed Pink Donut";
      metadata.attributes.rarity = "Common";
      break;
    case 3:
      metadata.image = "https://bafybeicgclyjzimvkmd4f2yjuhjmtch7xr27b3bhysaok6sj4vvwzvn2f4.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #03: Sapphire Donut";
      metadata.description = "Delicious Donuts #03: Sapphire Donut";
      metadata.attributes.rarity = "Common";
      break;
    case 4:
      metadata.image = "https://bafybeiafbumia7vqdhm6ie7sppgnp72tuc6h7oxv6ywczqz34t7a2xkmie.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #04: Royal Donut";
      metadata.description = "Delicious Donuts #04: Royal Donut";
      metadata.attributes.rarity = "Common";
      break;
    case 5:
      metadata.image = "https://bafybeihica2jtowunq2sb7nzzyporagm4fat3mopnm3q65nfimypoeuuui.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #05: Golden Donut";
      metadata.description = "Delicious Donuts #05: Golden Donut";
      metadata.attributes.rarity = "Common";
      break;
    case 6:
      metadata.image = "https://bafybeidsgxbp7ma22skffb73xlrbmvgd47ojbggo23vg7ozt7elbhtxlwi.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #06: Flowery Donut";
      metadata.description = "Delicious Donuts #06: Flowery Donut";
      metadata.attributes.rarity = "Common";
      break;
    case 7:
      metadata.image = "https://bafybeicbjnulq2yw5ks3qttgwfz4lsfhdiaecls3asbgiepnfxavw4zbqq.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #07: Bismuth Donut";
      metadata.description = "Delicious Donuts #07: Bismuth Donut";
      metadata.attributes.rarity = "Common";
      break;
    case 8:
      metadata.image = "https://bafybeieihb7rmmttnswrrin3tkjwrufaouehiien6422vvopnvkc4qk5k4.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #08: Filigree Donut";
      metadata.description = "Delicious Donuts #08: Filigree Donut";
      metadata.attributes.rarity = "Common";
      break;
    case 9:
      metadata.image = "https://bafybeiaqxvo63q6it74bw5aohf3kjxfc76julrow5whzfev2iccuore5fq.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #09: Retro Donut";
      metadata.description = "Delicious Donuts #09: Retro Donut";
      metadata.attributes.rarity = "Common";
      break;
    case 10:
      metadata.image = "https://bafybeie2dfd4r4sf57tumfrgqbko2y2cvgegl2mh4m3wbysif3qsgkbiai.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #10: Drooling Donut";
      metadata.description = "Delicious Donuts #10: Drooling Donut";
      metadata.attributes.rarity = "Common";
      break;
    case 11:
      metadata.image = "https://bafybeifq54bnclux62vum4kiy3bxgvmirsagcs5gmzzyicsor7ft3js254.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #11: Snowglobe Donut";
      metadata.description = "Delicious Donuts #11: Snowglobe Donut";
      metadata.attributes.rarity = "Common";
      break;
    case 12:
      metadata.image = "https://bafybeib6bfapbvz7vwdycd76hz6acxthmysy3k7vouigvmdrch2u3ylwve.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #12: Bottled Donut";
      metadata.description = "Delicious Donuts #12: Bottled Donut (break in case of emergency)";
      metadata.attributes.rarity = "Uncommon";
      break;
    case 13:
      metadata.image = "https://bafybeif3upkhpjzmpejpi5o6o5ko2lkjw5akafzwtwvnrxzar2dszqpapi.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #13: Donut Tree";
      metadata.description = "Delicious Donuts #13: Donut Tree";
      metadata.attributes.rarity = "Uncommon";
      break;
    case 14:
      metadata.image = "https://bafybeifazngvfthyr2y2md3gxovuid55afxo4ffejq2iyicm3limt7c4yu.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #14: Cathedral of the Donut";
      metadata.description = "Delicious Donuts #14: Cathedral of the Donut";
      metadata.attributes.rarity = "Uncommon";
      break;
    case 15:
      metadata.image = "https://bafybeidpf5dcea4775zrqro2vjw646jkl2dikgvid4nm3vzbzs5p5mlvwe.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #15: Doomsday Device Donut";
      metadata.description = "Delicious Donuts #15: Doomsday Device Donut";
      metadata.attributes.rarity = "Uncommon";
      break;
    case 16:
      metadata.image = "https://bafybeiho33y6qpclce4ufl53vkefmeb4qrksmuutlnlnbomdexsqfz7toy.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #16: Kanagawa Donut";
      metadata.description = "Delicious Donuts #16: Kanagawa Donut";
      metadata.attributes.rarity = "Uncommon";
      break;
    case 17:
      metadata.image = "https://bafybeictjjk26bwhjnulul6ejbdygjmnfypscgm6aeynfcjvkrcflotvbm.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #17: Post-Apocalyptic Donut";
      metadata.description = "Delicious Donuts #17: Post-Apocalyptic Donut";
      metadata.attributes.rarity = "Uncommon";
      break;
    case 18:
      metadata.image = "https://bafybeifeajn2bkkzebioaipjouia5qthnjxnou22egwi4lcbh7k7t3qcfy.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #18: Zombie Donut";
      metadata.description = "Delicious Donuts #18: Zombie Donut";
      metadata.attributes.rarity = "Rare";
      break;
    case 19:
      metadata.image = "https://bafybeic66k7ngskbxfmjfwjf3svlfnh24phzwnvyumo2xodoyjaunt7amu.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #19: Loch Ness Donut";
      metadata.description = "Delicious Donuts #19: Loch Ness Donut";
      metadata.attributes.rarity = "Rare";
      break;
    case 20:
      metadata.image = "https://bafybeify3b7jsawzijuh34r7vgvsr7gsmd3ydskbgebryseegd3ilwypie.ipfs.nftstorage.link/";
      metadata.name = "Delicious Donuts #20: Stained Glass Donut";
      metadata.description = "Delicious Donuts #20: Stained Glass Donut";
      metadata.attributes.rarity = "Rare";
      break;
  }

  return metadata;
}

mint();
