const addressDonutList = require("../json/02-output-address-donut-list.json");
const privateKeyJSON = require("../secrets/privateKey.json");
const nftContractABI = require("../abi/abi.json");
const ethers = require("ethers");

async function mint() {

    let nftMinted = 0;

    // Loop through address/donut list and mint an NFT for each entry
    for (entry of addressDonutList) {
        // Create provider & wallet
        let privateKey = privateKeyJSON.privateKey;
        let provider = new ethers.providers.JsonRpcProvider("https://rpc.gnosischain.com/");
        let wallet = new ethers.Wallet(privateKey, provider);

        // Create contract instance
        let nftContractAddress = "0xCca92f52F9BD7d0d853E59Dcb76C12C0A0D443fe";
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
            return "https://bafkreifnpu5iqlut5imobxzvvjyu2udiywflbo5sg2b6ifpp3mqnrf6zli.ipfs.nftstorage.link/";
        case 2:
            return "https://bafkreiftcttcv7en44y5qjyzb3b22yfaetdfrw47p2bzpxnyawcyr4f3c4.ipfs.nftstorage.link/";
        case 3:
            return "https://bafkreic27uaw3typj2eytetdpbsrdtn64cbxwvd6zqfk7tqhir7y5pnqam.ipfs.nftstorage.link/";
        case 4:
            return "https://bafkreie6fdmjlbjd6xeplhelwyiiouwkz7rbczczocmv7ebx3l6gzjhwn4.ipfs.nftstorage.link/";
        case 5:
            return "https://bafkreihjcyyadevsiupajijuab5nymssbvfkv6p35wssbidhhajsatnh4q.ipfs.nftstorage.link/";
        case 6:
            return "https://bafkreiad3hfczfcitzetpoakktsdkpsvioe32ylbzcfujwuzlftgxnqdyq.ipfs.nftstorage.link/";
        case 7:
            return "https://bafkreiav5pyg7aqk6u7pmtn5porq5neqjsj76bxqp5dysds3dn5ji2ceba.ipfs.nftstorage.link/";
        case 8:
            return "https://bafkreibqfsdefqfidie62xi3ppawxo7a3ja3bpltp5plxjdtejikbkbb4y.ipfs.nftstorage.link/";
        case 9:
            return "https://bafkreif7v5c7bc6bqqoqrcmdv4zdxouu2rfgindwlitzsxl5tuafe2y4y4.ipfs.nftstorage.link/";
        case 10:
            return "https://bafkreihtacrnzjk5au2iqv7w6tify5ii6bwwqmrzcwyphjddlzcezhfbee.ipfs.nftstorage.link/";
        case 11:
            return "https://bafkreih6oh2zxefn4jdtb53otmk6ljcspbbbovrmc767hvmcprwsocnvmy.ipfs.nftstorage.link/";
        case 12:
            return "https://bafkreidz4l6ijqxxax7zi6lstatjhipsqvcnfwod3grp6tpwxu2hpmwrha.ipfs.nftstorage.link/";
        case 13:
            return "https://bafkreibshtqu6gkigx6yxm4vig2pmeckha5ckchybrsvqsbuvbzqdwfxgu.ipfs.nftstorage.link/";
        case 14:
            return "https://bafkreifxcbwwuulzbjyfk2czv5cmx2kwybieafzctm3e7we5usrpvciouy.ipfs.nftstorage.link/";
        case 15:
            return "https://bafkreidu3r74h4cfukzzwetdesdkrflnbewvrw6brjdfbelsbnirnbpb6i.ipfs.nftstorage.link/";
        case 16:
            return "https://bafkreicp5hvoublyojehy4pmampedhigqccp2pwlhz4wbggh6yxkegdhq4.ipfs.nftstorage.link/";
        case 17:
            return "https://bafkreia7lunsfdji3w4j2okqmadoxm7gvgtwh2vusncyg6fe7rrgdhhcjm.ipfs.nftstorage.link/";
        case 18:
            return "https://bafkreihlvivdsaz7bjjyq2776p574m7px6fee7rx2yjs7hkxuvxejtljva.ipfs.nftstorage.link/";
        case 19:
            return "https://bafkreig2rqznj35wujdyslulcbef3x3slbpgl5dhucn3tlaryi3syu6zwm.ipfs.nftstorage.link/";
        case 20:
            return "https://bafkreigtfnihglurnsa74dgxig56aboq4nrc4vjnleqx3dli3jcydv4u6a.ipfs.nftstorage.link/";
    }
}

mint();
