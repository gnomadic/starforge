

async function verify(hre, address_, contractName_, dir_ = "", args_ = []) {
    try {
        await hre.run("verify:verify", {
            address: address_,
            contract: `src/${dir_}${contractName_}.sol:${contractName_}`,
            constructorArguments: args_,
        });
    } catch (error) {
        console.log("error:", error.message);
    }
}

async function getDeployedContract(name) {
    const deployment = await deployments.get(name);
    return await ethers.getContractAt(name, deployment.address);
}

async function deployComponent(deploy, deployer, component, entity, runVerify, required = "") {

    const deployedComponent = await deploy(component, {
        from: deployer,
        log: true,
        args: [`http://ipfs.io/ipfs/${IPFS_COMPONENTS}/${component}.json`],
    });

    const deployedEntity = await deploy(entity, {
        from: deployer,
        log: true,
    });

    const componentRegistry = await getDeployedContract("ComponentRegistry");
    const entityFactory = await getDeployedContract("EntityFactory");
    
    if (await entityFactory.getEntity(entity) == ZERO_ADDRESS) {
        tx = await entityFactory.registerEntity(entity, deployedEntity.address);
        await tx.wait();
    }

    if (required.length > 0) {
        if (!await componentRegistry.isRequired(deployedComponent.address)) {
            tx = await componentRegistry.setRequired(deployedComponent.address, required);
            await tx.wait();
        }
    }
    if (!await componentRegistry.isRegistered(deployedComponent.address)) {
        tx = await componentRegistry.register(deployedComponent.address);
        await tx.wait();
    }





    //   object.queueSession = queueSession.address;

    //   if (chainId !== "31337" && hre.network.name !== "localhost" && hre.network.name !== "1337") {
    if (runVerify) {
        console.log("verifying " + component);
        await verify(hre, deployedComponent.address, component, "components/", [`http://ipfs.io/ipfs/${IPFS_COMPONENTS}/${component}.json`]);
        await verify(hre, deployedEntity.address, entity, "entities/");
    }
    return deployedComponent.address;

}





const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

const IPFS_COMPONENTS = 'QmRZ3kExp8tiev3XhtQEYPbSMr3R9WafknzCikG1Dw1zsd';

const IPFS_GAMES = 'QmVSwRPRRPUe6mUx7Q3VxoQ8YFKfyU6x4abjBKWdT5hkrd';

module.exports = {
    getDeployedContract,
    verify,
    ZERO_ADDRESS,
    IPFS_COMPONENTS,
    IPFS_GAMES,
    deployComponent
};
