const { verify, getDeployedContract } = require("../../deployments/utils");

module.exports = async (hre) => {
  const { getNamedAccounts, deployments, getChainId, ethers } = hre;
  const fs = require("fs");
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();


  // ------------------------------------- deploy

  console.log("----- deploying")


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
    args: [labRenderer.address],
  });

  const craft = await deploy("CraftSystem", {
    from: deployer,
    log: true
  });

  const craftLoader = await deploy("CraftSystemLoader", {
    from: deployer,
    log: true,
  });

  console.log("----- done")

  console.log("----- configuring systems");

  const LabDeployment = await deployments.get("Lab");
  const deployedLab = await ethers.getContractAt("Lab", LabDeployment.address);

  const CraftDeployment = await deployments.get("CraftSystem");
  const deployedCraft = await ethers.getContractAt("CraftSystem", CraftDeployment.address);

  const CraftLoaderDeployment = await deployments.get("CraftSystemLoader");
  const deployedCraftLoader = await ethers.getContractAt("CraftSystemLoader", CraftLoaderDeployment.address);

  let tx = await deployedLab.addSystem(craft.address);
  await tx.wait();

  tx = await deployedCraft.setLoader(craftLoader.address);
  await tx.wait();

  console.log("----- done")

  console.log("----- loading prefabs")

  tx = await deployedCraftLoader.load(craft.address);
  await tx.wait();

  console.log("----- done")

  console.log("----- loading renderer")

  const LabRendererDeployment = await deployments.get("LabRenderer");
  const deployedRenderer = await ethers.getContractAt("LabRenderer", LabRendererDeployment.address);

  console.log("----- done")

  console.log("----- configuring renderer")

  tx = await deployedRenderer.addStepRenderer(roomRenderer.address);
  await tx.wait();

  tx = await deployedRenderer.addStepRenderer(beltRenderer.address);
  await tx.wait();

  console.log("----- done")


  // ------------------------------------- write address megafile

  let networkName = hre.network.name;
  networkName === "hardhat" ? (networkName = "localhost") : (networkName = hre.network.name);

  const object = {};
  object.lab = lab.address;
  object.craftSystem = craft.address;

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

  console.log ('mint because metamask is annoying');
  
  tx = await deployedLab.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
  await tx.wait();

  tx = await deployedLab.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
  await tx.wait();

};

module.exports.tags = ["tokens", "labs"];
