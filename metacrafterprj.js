// create a variable to hold your NFT's
      // this function will take in some values as parameters, create an
      // NFT object using the parameters passed to it for its metadata,
      // and store it in the variable above.
      const newNFT = [];
      function mintNFT(name, color, size) {
        const nft = {
          name: name,
          color: color,
          size: size,
        };
        newNFT.push(nft);
      }
      // create a "loop" that will go through an "array" of NFT's
      // and print their metadata with console.log()
      function listNFT() {
        for (let i = 0; i < newNFT.length; i++) {
          console.log("Name: " + newNFT[i].name);
          console.log("Color: " + newNFT[i].color);
          console.log("Size: " + newNFT[i].size);
        }
      }
      // print the total number of NFTs we have minted to the console
      function getTotal() {
        return newNFT.length;
      }
      // call your functions below this line
      mintNFT("NFT0", "yellow", "Large");
      mintNFT("NFT1", "White", "Medium");
      mintNFT("NFT2", "Red", "Small");
      listNFT();
      console.log("Total Supply: " + getTotal());
