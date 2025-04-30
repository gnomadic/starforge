const { verify, getDeployedContract } = require("../../deployments/utils");

module.exports = async (hre) => {
  const { getNamedAccounts, deployments, getChainId, ethers } = hre;
  const fs = require("fs");
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();


  // ------------------------------------- deploy

  console.log("----- deploying")


  const SystemController = await deploy("SystemController", {
    from: deployer,
    log: true,
  });

  const Scenario = await deploy("Scenario", {
    from: deployer,
    log: true,
  });


  const ScenarioFactory = await deploy("ScenarioFactory", {
    from: deployer,
    log: true,
    args: [SystemController.address],
  });



  const PlanetRenderer = await deploy("PlanetRenderer", {
    from: deployer,
    log: true,
  });

  const SpaceOrbStepRenderer = await deploy("SpaceOrbStepRenderer", {
    from: deployer,
    log: true,
  });

  const FunkRenderer = await deploy("FunkRenderer", {
    from: deployer,
    log: true,
  });

  const SilhouetteRenderer = await deploy("SilhouetteRenderer", {
    from: deployer,
    log: true,
  });

  const SkyRenderer = await deploy("SkyRenderer", {
    from: deployer,
    log: true,
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

  const SupplyToken = await deploy("SupplyToken", {
    from: deployer,
    log: true,
  });

  const SupplyTokenFactory = await deploy("SupplyTokenFactory", {
    from: deployer,
    log: true,
    args: [SupplyToken.address]
  });


  const SupplySystem = await deploy("SupplySystem", {
    from: deployer,
    log: true,
    args: [SupplyTokenFactory.address]
  });

  // const ComabtSystem = await deploy("CombatSystem", {
  //   from: deployer,
  //   log: true,
  // });

  const JobSystem = await deploy("JobSystem", {
    from: deployer,
    log: true,
  });

  // const QuestSystem = await deploy("QuestSystem", {
  //   from: deployer,
  //   log: true,
  // });

  // const SupplySystem = await deploy("SupplySystem", {
  //   from: deployer,
  //   log: true,
  // });
    

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



  console.log("----- configuring systems");

  const SysControllerDeployment = await deployments.get("SystemController");
  const deployedSysController = await ethers.getContractAt("SystemController", SysControllerDeployment.address);

  const PlanetDeployment = await deployments.get("Planet");
  const deployedPlanet = await ethers.getContractAt("Planet", PlanetDeployment.address);

  const upgradesSystemDeployment = await deployments.get("UpgradesSystem");
  const deployedUpgradesSystem = await ethers.getContractAt("UpgradesSystem", upgradesSystemDeployment.address);

// --- tokens


  let tx = await deployedSysController.setTokenAddress(Planet.address);
  await tx.wait();

  tx = await deployedSysController.setScenarioFactory(ScenarioFactory.address);
  await tx.wait();

  tx = await deployedSysController.registerSystem(PlanetStats.address);
  await tx.wait();

  tx = await deployedSysController.registerSystem(SupplySystem.address);
  await tx.wait();

  tx = await deployedSysController.registerSystem(JobSystem.address);
  await tx.wait();


  console.log("----- done")

  console.log("----- loading prefabs")


  const RegenScenario  = await deploy("RegenScenario", {
    from: deployer,
    log: true,
    args: [ScenarioFactory.address, "bafkreia6ms7spfoyvkk7yrfes7laca62uwwougi56arlonj75ysbznuwci"],
  });

  // tx = await deployedCraftLoader.load(craft.address);
  // await tx.wait();

  console.log("----- done")

  console.log("----- loading renderer")

  const PlanetRendererDeployment = await deployments.get("PlanetRenderer");
  const deployedRenderer = await ethers.getContractAt("PlanetRenderer", PlanetRendererDeployment.address);

  console.log("----- done")

  console.log("----- configuring renderer")

  tx = await deployedRenderer.addStepRenderer(SkyRenderer.address);
  await tx.wait();
  tx = await deployedRenderer.addStepRenderer(FunkRenderer.address);
  await tx.wait();
  tx = await deployedRenderer.addStepRenderer(SpaceOrbStepRenderer.address);
  await tx.wait();
  tx = await deployedRenderer.addStepRenderer(SilhouetteRenderer.address);
  await tx.wait();
  

  console.log("----- done")


  // ------------------------------------- write address megafile

  let networkName = hre.network.name;
  networkName === "hardhat" ? (networkName = "localhost") : (networkName = hre.network.name);

  const object = {};
  object.Planet = Planet.address;
  object.SystemController = SystemController.address;
  object.ScenarioFactory = ScenarioFactory.address;
  object.PlanetStats = PlanetStats.address;
  object.SupplySystem = SupplySystem.address;
  object.JobSystem = JobSystem.address;
  object.UpgradesSystem = UpgradesSystem.address;


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


};

module.exports.tags = ["engine", "everything"];
