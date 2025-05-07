
import { ethers } from "hardhat";
// import { getDeployedContract } from "../../deployments/utils.js";
// import { getDeployedContract } from "../../deployments/utils.js"
const hre = require("hardhat");
const fs = require("fs");

const deployments = hre.deployments;

async function main() {
  // await deployments.fixture(["engine"]);
  let scenarios = await getDeployedContract("ScenarioFactory");
  let jobSystem = await getDeployedContract("JobSystem");

  let regen = await scenarios.scenarios(0);
  console.log("regen: ", regen);

  const activeJob = await jobSystem.registerSystem("0x52EA6059fBf9f98Fa9f56101c75dbe8d48839511");
  let receipt = await activeJob.wait();

  console.log("receipt: ", JSON.stringify(receipt));

  

  // console.log("connected");


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


async function getDeployedContract(name: string) {
    const deployment = await deployments.get(name);
    return await ethers.getContractAt(name, deployment.address);
}