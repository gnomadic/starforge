const { verify, getDeployedContract } = require("../../deployments/utils");

module.exports = async (hre) => {
  const { getNamedAccounts, deployments, getChainId, ethers } = hre;
  const fs = require("fs");
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();


  const redo = false;


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




  const Planet = await deploy("PlanetVAlpha", {
    from: deployer,
    log: true,
    args: [PlanetRenderer.address, SystemController.address],
  });
  

  const StatsEntity = await deploy("StatsEntity", {
    from: deployer,
    log: true,
  });

  const PlanetStats = await deploy("StatsSystem", {
    from: deployer,
    log: true,
    args: [StatsEntity.address],
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

  const JobEntity = await deploy("JobEntity", {
    from: deployer,
    log: true,
  });

  const JobSystem = await deploy("JobSystem", {
    from: deployer,
    log: true,
    args: [JobEntity.address]
  });



  console.log("----- done")



  console.log("----- configuring systems");

  console.log("getting sys controler ")
  // const SysControllerDeployment = await deployments.get("SystemController");
  const deployedSysController = await ethers.getContractAt("SystemController", SystemController.address);
  // return await ethers.getContractAt(name, "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6");
  console.log("got sys controler ")
  // const PlanetDeployment = await deployments.get("PlanetVAlpha");
  // const deployedPlanet = await ethers.getContractAt("PlanetVAlpha", PlanetDeployment.address);

  // const upgradesSystemDeployment = await deployments.get("UpgradesSystem");
  // const deployedUpgradesSystem = await ethers.getContractAt("UpgradesSystem", upgradesSystemDeployment.address);

  // --- tokens

  if (!redo) {

    console.log('one ');
    let tx = await deployedSysController.setTokenAddress(Planet.address);
    await tx.wait();

    console.log('two');
    tx = await deployedSysController.setScenarioFactory(ScenarioFactory.address);
    await tx.wait();

    console.log('three');
    tx = await deployedSysController.registerSystem(PlanetStats.address);
    await tx.wait();

    console.log('four');
    tx = await deployedSysController.registerSystem(SupplySystem.address);
    await tx.wait();

    console.log('five');
    tx = await deployedSysController.registerSystem(JobSystem.address);
    await tx.wait();
  }

  console.log("----- done")

  console.log("----- loading prefabs")


  const RegenScenario = await deploy("RegenScenario", {
    from: deployer,
    log: true,
    args: [ScenarioFactory.address, "bafkreia6ms7spfoyvkk7yrfes7laca62uwwougi56arlonj75ysbznuwci", deployer],
  });

  // tx = await deployedCraftLoader.load(craft.address);
  // await tx.wait();

  console.log("----- done")

  console.log("----- loading renderer")

  const PlanetRendererDeployment = await deployments.get("PlanetRenderer");
  const deployedRenderer = await ethers.getContractAt("PlanetRenderer", PlanetRendererDeployment.address);

  console.log("----- done")

  console.log("----- configuring renderer")

  if (!redo) {

    tx = await deployedRenderer.addStepRenderer(SkyRenderer.address);
    await tx.wait();
    tx = await deployedRenderer.addStepRenderer(FunkRenderer.address);
    await tx.wait();
    tx = await deployedRenderer.addStepRenderer(SpaceOrbStepRenderer.address);
    await tx.wait();
    tx = await deployedRenderer.addStepRenderer(SilhouetteRenderer.address);
    await tx.wait();

  }

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
  // object.UpgradesSystem = UpgradesSystem.address;


  const filename = "../deployments/" + networkName + "/entropical-deployment.json";


  await fs.writeFileSync(filename, JSON.stringify(object, null, 2));
  console.log("local address file created");

  // ------------------------------------- verify

  console.log("done deploying");
  if (chainId !== "31337"
    && hre.network.name !== "localhost"
    && hre.network.name !== "1337"
    && hre.network.name !== "10143"
    && hre.network.name !== "143") {

      console.log("verifing");

      await verify(hre, Planet.address, "PlanetVAlpha", "tokens/", [PlanetRenderer.address, SystemController.address]);
      await verify(hre, SystemController.address, "SystemController", "systems/", []);
      await verify(hre, ScenarioFactory.address, "ScenarioFactory", "", [SystemController.address]);
      await verify(hre, Scenario.address, "Scenario", "", []);
      await verify(hre, PlanetStats.address, "StatsSystem", "systems/", []);
      await verify(hre, SupplySystem.address, "SupplySystem", "systems/", [SupplyTokenFactory.address]);
      await verify(hre, JobSystem.address, "JobSystem", "systems/", []);
      await verify(hre, "0xeDb12e94f8D3b2C30CeAfCE938C6B1B2806DbDc9", "JobEntity", "entities/", []);


  }

  // console.log('mint because metamask is annoying on localhost');

  // tx = await deployedPlanet.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")//, {value: hre.ethers.parseEther("0.05")})
  // await tx.wait();

  // tx = await deployedPlanet.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")//, {value: hre.ethers.parseEther("0.05")})
  // await tx.wait();


};

module.exports.tags = ["engine", "everything"];
