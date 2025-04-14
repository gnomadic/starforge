const { verify, getDeployedContract } = require("../../deployments/utils");

module.exports = async (hre) => {
  const { getNamedAccounts, deployments, getChainId, ethers } = hre;
  const fs = require("fs");
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();


  // ------------------------------------- deploy

  console.log("----- deploying")

  const Scenario = await deploy("Scenario", {
    from: deployer,
    log: true,
  });


  const ScenarioFactory = await deploy("ScenarioFactory", {
    from: deployer,
    log: true,
  });

  const RegenScenario  = await deploy("RegenScenario", {
    from: deployer,
    log: true,
    args: [ScenarioFactory.address, "TODO ipfs url"],
  });


  const PlanetRenderer = await deploy("PlanetRenderer", {
    from: deployer,
    log: true,
  });

  const SpaceOrbStepRenderer = await deploy("SpaceOrbStepRenderer", {
    from: deployer,
    log: true,
  });


  const SystemController = await deploy("SystemController", {
    from: deployer,
    log: true,
    args: [ScenarioFactory.address],
  });

  const Planet = await deploy("Planet", {
    from: deployer,
    log: true,
    args: [PlanetRenderer.address, SystemController.address],
  });

  const PlanetStats = await deploy("PlanetStatsSystem", {
    from: deployer,
    log: true,
    args: [Planet.address]
  });

  const UpgradesSystem = await deploy("UpgradesSystem", {
    from: deployer,
    log: true,
  });

  const ComabtSystem = await deploy("CombatSystem", {
    from: deployer,
    log: true,
  });

  const JobSystem = await deploy("JobSystem", {
    from: deployer,
    log: true,
  });

  const QuestSystem = await deploy("QuestSystem", {
    from: deployer,
    log: true,
  });

  const SupplySystem = await deploy("SupplySystem", {
    from: deployer,
    log: true,
  });
    

  // const DungeonMaster = await deploy("DungeonMaster", {
  //   from: deployer,
  //   log: true,
  // });

  // const InvestmentSystem = await deploy("InvestmentSystem", {
  //   from: deployer,
  //   log: true,
  //   args: [Planet.address]
  // });

  // const GlobalProgress = await deploy("GlobalProgress", {
  //   from: deployer,
  //   log: true,
  // });










  // const craft = await deploy("CraftSystem", {
  //   from: deployer,
  //   log: true
  // });

  // const craftLoader = await deploy("CraftSystemLoader", {
  //   from: deployer,
  //   log: true,
  // });

  console.log("----- done")

  console.log("----- Deploying Tokens");

  const energy = await deploy("EnergyToken", {
    from: deployer,
    log: true
  });

  const life = await deploy("LifeToken", {
    from: deployer,
    log: true
  });

  const matter = await deploy("MatterToken", {
    from: deployer,
    log: true
  });

  const tech = await deploy("TechnologyToken", {
    from: deployer,
    log: true
  });


  console.log("----- done")

  console.log("----- configuring systems");

  const SysControllerDeployment = await deployments.get("SystemController");
  const deployedSysController = await ethers.getContractAt("SystemController", SysControllerDeployment.address);

  const PlanetDeployment = await deployments.get("Planet");
  const deployedPlanet = await ethers.getContractAt("Planet", PlanetDeployment.address);

  const upgradesSystemDeployment = await deployments.get("UpgradesSystem");
  const deployedUpgradesSystem = await ethers.getContractAt("UpgradesSystem", upgradesSystemDeployment.address);

// --- tokens

  const energyTokenDeployment = await deployments.get("EnergyToken");
  const deployedEnergyToken = await ethers.getContractAt("EnergyToken", energyTokenDeployment.address);

  const lifeTokenDeployment = await deployments.get("LifeToken");
  const deployedLifeToken = await ethers.getContractAt("LifeToken", lifeTokenDeployment.address);

  const matterTokenDeployment = await deployments.get("MatterToken");
  const deployedMatterToken = await ethers.getContractAt("MatterToken", matterTokenDeployment.address);

  const techTokenDeployment = await deployments.get("TechnologyToken");
  const deployedTechToken = await ethers.getContractAt("TechnologyToken", techTokenDeployment.address);

  // const DungeonMasterDeployment = await deployments.get("DungeonMaster");
  // const deployedDungeonMaster = await ethers.getContractAt("DungeonMaster", DungeonMasterDeployment.address);


  // const CraftDeployment = await deployments.get("CraftSystem");
  // const deployedCraft = await ethers.getContractAt("CraftSystem", CraftDeployment.address);

  // const CraftLoaderDeployment = await deployments.get("CraftSystemLoader");
  // const deployedCraftLoader = await ethers.getContractAt("CraftSystemLoader", CraftLoaderDeployment.address);


  let tx = await deployedSysController.setTokenAddress(Planet.address);
  await tx.wait();

  tx = await deployedSysController.registerSystem(1, PlanetStats.address);
  await tx.wait();

  tx = await deployedSysController.registerSystem(2, UpgradesSystem.address);
  await tx.wait();

  // tx = await deployedSysController.registerSystem(2, InvestmentSystem.address);
  // await tx.wait();

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

  tx = await deployedRenderer.addStepRenderer(SpaceOrbStepRenderer.address);
  await tx.wait();

  console.log("----- done")


  // ------------------------------------- write address megafile

  let networkName = hre.network.name;
  networkName === "hardhat" ? (networkName = "localhost") : (networkName = hre.network.name);

  const object = {};
  object.Planet = Planet.address;
  object.SystemController = SystemController.address;
  object.PlanetStats = PlanetStats.address;
  object.UpgradesSystem = UpgradesSystem.address;
  // object.DungeonMaster = DungeonMaster.address;
  object.energyToken = energy.address;
  object.lifeToken = life.address;
  object.matterToken = matter.address;
  object.techToken = tech.address;



  const filename = "../deployments/" + networkName + "/entropical-deployment.json";


  await fs.writeFileSync(filename, JSON.stringify(object, null, 2));
  console.log("local address file created");

  // ------------------------------------- verify

  console.log("done deploying");
  if (chainId !== "31337" && hre.network.name !== "localhost" && hre.network.name !== "1337") {
    console.log("verifing");

    await verify(hre, Planet.address, "Planet", "", [Planet.address]);

  }

  console.log('mint because metamask is annoying on localhost');

  tx = await deployedPlanet.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
  await tx.wait();

  tx = await deployedPlanet.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
  await tx.wait();

  tx = await deployedLifeToken.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", BigInt(10000000000000000000))
  await tx.wait();

  tx = await deployedEnergyToken.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", BigInt(20000000000000000000))
  await tx.wait();

  tx = await deployedMatterToken.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", BigInt(30000000000000000000))
  await tx.wait();

  tx = await deployedTechToken.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", BigInt(40000000000000000000))
  await tx.wait();

  tx = await deployedUpgradesSystem.addUpgrade("Basic Energy Collector", "Harnesses solar energy to increase energy production.",
    [BigInt(10000000000000000000), BigInt(20000000000000000000), BigInt(30000000000000000000), BigInt(40000000000000000000)],
    [life.address, matter.address, tech.address, energy.address],
    [BigInt(40000000000000000000), BigInt(30000000000000000000), BigInt(20000000000000000000), BigInt(10000000000000000000)],
    [energy.address, life.address, matter.address, tech.address],);
  await tx.wait();





};

module.exports.tags = ["engine", "everything"];
