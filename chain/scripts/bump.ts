
import { ethers } from "hardhat";
// import { getDeployedContract } from "../../deployments/utils.js";
// import { getDeployedContract } from "../../deployments/utils.js"
const hre = require("hardhat");
const fs = require("fs");

// const deployments = hre.deployments;

async function main() {
  // await deployments.fixture(["engine"]);

  let contract = await getDeployedContract("Planet");
  console.log("connected");

  const amount_to_generate = 23;

  for (let i = 0; i < amount_to_generate; i++) {
    let svg = await contract.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    await svg.wait();
    console.log("done");
    // await fs.writeFileSync(filename, svg);
    // console.log("generated: " + i + "/" + amount_to_generate);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


async function getDeployedContract(name: string) {
    // const deployment = await deployments.get(name);
    return await ethers.getContractAt(name, "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6");
}