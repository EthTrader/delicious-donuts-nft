pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract NFT is ERC721Enumerable {
    uint256 public tokenCount;
    address public adminAddress;
    bool public mintComplete;

    // Optional mapping for token URIs
    mapping(uint256 => string) private _tokenURIs;

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

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721: invalid token ID");

        string memory _tokenURI = _tokenURIs[tokenId];
        string memory base = _baseURI();

        // If there is no base URI, return the token URI.
        if (bytes(base).length == 0) {
            return _tokenURI;
        }
        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        if (bytes(_tokenURI).length > 0) {
            return string(abi.encodePacked(base, _tokenURI));
        }

        return super.tokenURI(tokenId);
    }

    /**
     * @dev Sets `_tokenURI` as the tokenURI of `tokenId`.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     */
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721URIStorage: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }
 
}