import { ethers } from "hardhat";

async function main() {
 

  const chainNft = await ethers.deployContract("ChainNft");

  await chainNft.waitForDeployment();

  console.log(
    `ChainNFt deployed to ${chainNft.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
