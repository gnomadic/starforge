const { verify, getDeployedContract } = require("../../deployments/utils");

module.exports = async (hre) => {
    const { getNamedAccounts, deployments, getChainId, ethers } = hre;
    const fs = require("fs");
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = await getChainId();

  
    // ------------------------------------- deploy
  
    const color = await deploy("Color", {
      from: deployer,
      log: true,
    });

    const colorUtils = await deploy("ColorUtils", {
      from: deployer,
      log: true,
    });

    const starshipRenderer = await deploy("StarshipRenderer", {
      from: deployer,
      libraries: {
        Color: color.address
      },
      log: true,
    });
  
    const starship = await deploy("Starship", {
      from: deployer,
      args: [starshipRenderer.address],
      libraries: {
        Color: color.address,
      },
      log: true,
    });

    const beamRenderer = await deploy("BeamRenderer", {
      from: deployer,
      libraries: {
        Color: color.address
      },
      log: true,
      args: [colorUtils.address]
    });

    const cloudRenderer = await deploy("CloudRenderer", {
      from: deployer,
      libraries: {
        Color: color.address
      },
      log: true,
      args: [colorUtils.address]
    });

    const starRenderer = await deploy("StarRenderer", {
      from: deployer,
      libraries: {
        Color: color.address
      },
      log: true,
    });

    const ufoRenderer = await deploy("UFORenderer", {
      from: deployer,
      libraries: {
        Color: color.address
      },
      log: true,
      args: [colorUtils.address]
    });

    console.log("getting deployment")

    const deployment = await deployments.get("StarshipRenderer");
    const deployedRenderer =  await ethers.getContractAt("StarshipRenderer", deployment.address);
    // const deployedRenderer = await getDeployedContract(hre, "StarshipRenderer");
    console.log("got deployment")

    let tx = await deployedRenderer.addStepRenderer(starRenderer.address);
    await tx.wait();

    tx = await deployedRenderer.addStepRenderer(beamRenderer.address);
    await tx.wait();

    tx = await deployedRenderer.addStepRenderer(cloudRenderer.address);
    await tx.wait();


    tx = await deployedRenderer.addStepRenderer(ufoRenderer.address);
    await tx.wait();

    // tx = await deployedRenderer.addStepRenderer(shipRenderer.address);
    // await tx.wait();





  
  
    // ------------------------------------- write address megafile
  
    let networkName = hre.network.name;
    networkName === "hardhat" ? (networkName = "localhost") : (networkName = hre.network.name);
  
    const object = {};
    object.starship = starship.address;

    const filename = "../deployments/" + networkName + "/twomoons-deployment.json";


    await fs.writeFileSync(filename, JSON.stringify(object, null, 2));
    console.log("local address file created");
  
    // ------------------------------------- verify
  
    console.log("done deploying");
    if (chainId !== "31337" && hre.network.name !== "localhost" && hre.network.name !== "1337") {
      console.log("verifing");
      await verify(hre, color.address, "Color");
      await verify(hre, starshipRenderer.address, "StarshipRenderer", "renderers/");
      await verify(hre, starship.address, "Starship", "starships/", [starshipRenderer.address]);

    }
  
  };
  
  module.exports.tags = ["tokens", "starships"];
  