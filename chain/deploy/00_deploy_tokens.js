const { verify, getDeployedContract } = require("../../deployments/utils");

module.exports = async (hre) => {
  const { getNamedAccounts, deployments, getChainId, ethers } = hre;
  const fs = require("fs");
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();


  // ------------------------------------- deploy

  console.log("----- deploying")


  // const colorUtils = await deploy("ColorUtils", {
  //   from: deployer,
  //   log: true,
  // });

  const PlanetRenderer = await deploy("PlanetRenderer", {
    from: deployer,
    log: true,
  });

  const SurfaceRenderer = await deploy("SurfaceRenderer", {
    from: deployer,
    log: true,
  });
  const MapRenderer = await deploy("MapRenderer", {
    from: deployer,
    log: true,
  });

  const SystemController = await deploy("SystemController", {
    from: deployer,
    log: true,
  });

  const Planet = await deploy("Planet", {
    from: deployer,
    log: true,
    args: [PlanetRenderer.address, SystemController.address],
  });

  const InvestmentSystem = await deploy("InvestmentSystem", {
    from: deployer,
    log: true,
    args: [Planet.address]
  });

  const GlobalProgress = await deploy("GlobalProgress", {
    from: deployer,
    log: true,
  });


  







  // const craft = await deploy("CraftSystem", {
  //   from: deployer,
  //   log: true
  // });

  // const craftLoader = await deploy("CraftSystemLoader", {
  //   from: deployer,
  //   log: true,
  // });

  console.log("----- done")

  console.log("----- configuring systems");

  const SysControllerDeployment = await deployments.get("SystemController");
  const deployedSysController = await ethers.getContractAt("SystemController", SysControllerDeployment.address);

  const PlanetDeployment = await deployments.get("Planet");
  const deployedPlanet = await ethers.getContractAt("Planet", PlanetDeployment.address);

  // const CraftDeployment = await deployments.get("CraftSystem");
  // const deployedCraft = await ethers.getContractAt("CraftSystem", CraftDeployment.address);

  // const CraftLoaderDeployment = await deployments.get("CraftSystemLoader");
  // const deployedCraftLoader = await ethers.getContractAt("CraftSystemLoader", CraftLoaderDeployment.address);


  let tx = await deployedSysController.setTokenAddress(Planet.address);
  await tx.wait();

  tx = await deployedSysController.registerSystem(1, GlobalProgress.address);
  await tx.wait();

  tx = await deployedSysController.registerSystem(2, InvestmentSystem.address);
  await tx.wait();

  // tx = await deployedCraft.setLoader(craftLoader.address);
  // await tx.wait();

  console.log("----- done")

  console.log("----- loading prefabs")

  // tx = await deployedCraftLoader.load(craft.address);
  // await tx.wait();

  console.log("----- done")

  console.log("----- loading renderer")

  const PlanetRendererDeployment = await deployments.get("PlanetRenderer");
  const deployedRenderer = await ethers.getContractAt("PlanetRenderer", PlanetRendererDeployment.address);

  console.log("----- done")

  console.log("----- configuring renderer")

  tx = await deployedRenderer.addStepRenderer(MapRenderer.address);
  await tx.wait();

  tx = await deployedRenderer.addStepRenderer(SurfaceRenderer.address);
  await tx.wait();

  console.log("----- done")


  // ------------------------------------- write address megafile

  let networkName = hre.network.name;
  networkName === "hardhat" ? (networkName = "localhost") : (networkName = hre.network.name);

  const object = {};
  object.Planet = Planet.address;
  object.SystemController = SystemController.address;
  object.InvestmentSystem = InvestmentSystem.address;
  object.GlobalProgress = GlobalProgress.address;
  // object.craftSystem = craft.address;

  const filename = "../deployments/" + networkName + "/AA-deployment.json";


  await fs.writeFileSync(filename, JSON.stringify(object, null, 2));
  console.log("local address file created");

  // ------------------------------------- verify

  console.log("done deploying");
  if (chainId !== "31337" && hre.network.name !== "localhost" && hre.network.name !== "1337") {
    console.log("verifing");
    // await verify(hre, color.address, "Color");
    // await verify(hre, starshipRenderer.address, "StarshipRenderer", "renderers/");
    await verify(hre, Planet.address, "Planet", "", [Planet.address]);

  }

  console.log('mint because metamask is annoying on localhost');

  tx = await deployedPlanet.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
  await tx.wait();

  tx = await deployedPlanet.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
  await tx.wait();

};

module.exports.tags = ["tokens", "Planets"];
