pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage {
    uint256 public tokenCount;
    address public adminAddress;
    bool public mintComplete;

    constructor () ERC721 ("Delicious Donuts", "DONUTNFT") {
        tokenCount = 0;
        adminAddress = msg.sender;
    }

    function mint(address receiver, string memory tokenURI) public returns (uint256) {
        require(msg.sender == adminAddress);
        require(mintComplete == false);

        uint256 id = tokenCount;
        _safeMint(receiver, id);
        _setTokenURI(id, tokenURI);
        tokenCount++; 
    } 

    function closeMinting(address receiver, string memory tokenURI) public returns (uint256) {
        require(msg.sender == adminAddress);

        mintComplete = true;
    } 
}