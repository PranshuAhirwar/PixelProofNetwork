const { ethers } = require("hardhat");

async function main() {
  const PixelProofNetwork = await ethers.getContractFactory("PixelProofNetwork");
  const pixelProofNetwork = await PixelProofNetwork.deploy();

  await pixelProofNetwork.deployed();

  console.log("PixelProofNetwork contract deployed to:", pixelProofNetwork.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
