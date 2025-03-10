const { verify, getDeployedContract } = require("../../deployments/utils");

module.exports = async (hre) => {
  const { getNamedAccounts, deployments, getChainId, ethers } = hre;
  const fs = require("fs");
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();


  // ------------------------------------- deploy

  console.log("----- deploying tokens")


  // const colorUtils = await deploy("ColorUtils", {
  //   from: deployer,
  //   log: true,
  // });

  const PopulationToken = await deploy("PopulationToken", {
    from: deployer,
    log: true,
  });












  console.log("----- done")

  console.log("----- adding to investment system")



  const InvestmentSystemDeployment = await deployments.get("InvestmentSystem");
  const deployedInvestmentSystem = await ethers.getContractAt("InvestmentSystem", InvestmentSystemDeployment.address);


  tx = await deployedInvestmentSystem.addInvestment("first", [], [], [PopulationToken.address], [1]);
  await tx.wait();

  tx = await deployedInvestmentSystem.addInvestment("second", [], [], [], []);
  await tx.wait();

  tx = await deployedInvestmentSystem.addInvestment("third", [], [], [], []);
  await tx.wait();

  console.log("----- done")


  // ------------------------------------- write address megafile

  let networkName = hre.network.name;
  networkName === "hardhat" ? (networkName = "localhost") : (networkName = hre.network.name);

  const object = {};
  object.PopulationToken = PopulationToken.address;

  const filename = "../deployments/" + networkName + "/AA-tokens.json";


  await fs.writeFileSync(filename, JSON.stringify(object, null, 2));
  console.log("local address file created");

  // ------------------------------------- verify

  console.log("done deploying");
  if (chainId !== "31337" && hre.network.name !== "localhost" && hre.network.name !== "1337") {
    console.log("verifing");
    // await verify(hre, color.address, "Color");
    // await verify(hre, starshipRenderer.address, "StarshipRenderer", "renderers/");
    await verify(hre, PopulationToken.address, "PopulationToken", "", [PopulationToken.address]);

  }



};

module.exports.tags = ["tokens", "everything"];
