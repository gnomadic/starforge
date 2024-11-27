const { verify, getDeployedContract } = require("../../deployments/utils");

module.exports = async (hre) => {
    const { getNamedAccounts, deployments, getChainId, ethers } = hre;
    const fs = require("fs");
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = await getChainId();

  
    // ------------------------------------- deploy

    console.log("----- deploying -----")

  
    const colorUtils = await deploy("ColorUtils", {
      from: deployer,
      log: true,
    });

    const labRenderer = await deploy("LabRenderer", {
      from: deployer,
      log: true,
    });

    const beltRenderer = await deploy("BeltRenderer", {
      from: deployer,
      log: true,
    });
    const roomRenderer = await deploy("RoomRenderer", {
      from: deployer,
      log: true,
    });

    const lab = await deploy("Lab", {
      from: deployer,
      log: true,
    });

   

    console.log("----- loading renderer -----")

    const deployment = await deployments.get("LabRenderer");
    const deployedRenderer =  await ethers.getContractAt("LabRenderer", deployment.address);
    
    
    console.log("----- configuring renderer -----")

    let tx = await deployedRenderer.addStepRenderer(roomRenderer.address);
    await tx.wait();

    tx = await deployedRenderer.addStepRenderer(beltRenderer.address);
    await tx.wait();

    
    // ------------------------------------- write address megafile
  
    let networkName = hre.network.name;
    networkName === "hardhat" ? (networkName = "localhost") : (networkName = hre.network.name);
  
    const object = {};
    object.lab = lab.address;

    const filename = "../deployments/" + networkName + "/AA-deployment.json";


    await fs.writeFileSync(filename, JSON.stringify(object, null, 2));
    console.log("local address file created");
  
    // ------------------------------------- verify
  
    console.log("done deploying");
    if (chainId !== "31337" && hre.network.name !== "localhost" && hre.network.name !== "1337") {
      console.log("verifing");
      // await verify(hre, color.address, "Color");
      // await verify(hre, starshipRenderer.address, "StarshipRenderer", "renderers/");
      await verify(hre, lab.address, "Lab", "", [lab.address]);

    }
  
  };
  
  module.exports.tags = ["tokens", "labs"];
  