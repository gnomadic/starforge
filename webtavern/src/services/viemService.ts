import { GameFuncParams, GameSummary } from '@/domain/Domain';
import { GameABI } from '@/domain/abi/GameABI';
import { Deployments } from '@/domain/deployments';
import { bigIntReplacer } from '@/domain/utils';
import { readPvpResultGetLastGame, readPvpResultGetSummary, readQueueSessionGetPlayerCount, readQueueSessionIsPlayerInQueue, simulateGameExecuteFlow, writeGameExecuteFlow } from '@/generated';
import { Abi, Address, Chain, PublicClient, WalletClient, createPublicClient, createWalletClient, custom, http } from 'viem'
import { base, baseSepolia, localhost, sepolia } from 'viem/chains'
import { State, CreateConnectorFn, Connector, createConfig, Config } from 'wagmi';
import { writeContractMutationOptions } from 'wagmi/query';






let publicClients : { [x: string]: PublicClient | undefined } =  {
    [sepolia.id.toString()]: undefined,
    [baseSepolia.id.toString()]: undefined,
    [base.id.toString()]: undefined
};

let configs : { [x: string]: any } =  {
    [sepolia.id.toString()]: undefined,
    [baseSepolia.id.toString()]: undefined,
    [base.id.toString()]: undefined
};

let walletClient: WalletClient;

function getConfig(chainId: string) : Config {
    if (configs[chainId] != undefined){
        return configs[chainId];
    }
    configs[chainId] = createConfig({
        chains: [getDeployment(chainId).viemChain],
        transports: {
            [getDeployment(chainId).viemChain.id]: http()
        }
    })

    return configs[chainId];
}


function getPublicClient(chainId: string = '11155111') : PublicClient {

    let deployment = getDeployment(chainId);
    if (publicClients[chainId] != undefined){
        console.log("getting public client for: " + publicClients[chainId]!.chain?.id)

        return publicClients[chainId]!;
    }
    publicClients[chainId] = createPublicClient({
        chain: deployment.viemChain,
        transport: http(),
    })

    
    return publicClients[chainId]!;
}

function getWalletClient() {
    if (walletClient) {
        return walletClient;
    }
    walletClient = createWalletClient({
        chain: sepolia as Chain,
        transport: custom(window.ethereum)
    })
    return walletClient;
}

export function getDeployment(chainId: string) {
    for (const key in Deployments) {
        if (Deployments[key].chainId === chainId) {
            return Deployments[key];
        }
    }
    return Deployments.localhost;
}

export async function getBlockNumber() {

    const client = getPublicClient();

    const blockNumber = await client.getBlockNumber();
    return blockNumber;
}

export async function getGameSummary(chainId: string, gameAddress: Address): Promise<GameSummary> {
    const client = getPublicClient(chainId);

    const data = await client.readContract({
        address: gameAddress,
        abi: GameABI,
        functionName: 'getSummary',
    })


    return data as GameSummary;
}

// export async function getQueueSize(){
//     const client = getClient();

//     const data = await client.readContract({
//         address: '0x
// }

export async function getQueueSize(chainId: string, gameAddress: Address) {
    const config = getConfig(chainId);
    const deployment = getDeployment(chainId);

    const data = await readQueueSessionGetPlayerCount(config, {
        address: deployment.queueComponent,
        args: [gameAddress],

    })

    return data;
}

export async function isPlayerInQueue(chainId: string, gameAddress: Address, playerAddress: Address) {
    const config = getConfig(chainId);
    const deployment = getDeployment(chainId);

    const data = await readQueueSessionIsPlayerInQueue(config, {
        address: deployment.queueComponent,
        args: [gameAddress, playerAddress],

    })

    return data;
}

export async function getLastGame(chainId: string, gameAddress: Address, playerAddress: Address) {
    const config = getConfig(chainId);
    const deployment = getDeployment(chainId);

    const data = await readPvpResultGetLastGame(config, {
        address: deployment.resultComponent,
        args: [gameAddress, playerAddress],

    })

    return data;
}


// useReadQueueSessionGetPlayerCount
// useReadQueueSessionIsPlayerInQueue
// useReadPvpResultGetLastGame

export async function getGameResult(chainId: string, resultAddress: Address, gameAddress: Address, playerAddress: Address) {
    const config = getConfig(chainId);

    // const data = await client.readContract({
    //     address: resultAddress,
    //     abi: GameABI,
    //     functionName: 'getResult',
    //     args: [playerAddress]
    // })

    // console.log("getGameResult", resultAddress, gameAddress, playerAddress)

    const data = await readPvpResultGetLastGame(config, {
        address: resultAddress,
        args: [gameAddress, playerAddress]
    })

    // console.log(JSON.stringify(data, bigIntReplacer))

    return data;
}



export async function executeFlow(chainId: string, address: Address, functionName: string, args: GameFuncParams) {
    const config = getConfig(chainId);

    const write = await writeGameExecuteFlow(config, {
        address: address,
        args: [
            functionName,
            args
        ],
    })

    return write;
}

export async function simulateGameFlow(chainId: string, address: Address, functionName: string, args: GameFuncParams) {
    const config = getConfig(chainId);

    const simulate = await simulateGameExecuteFlow(config, {
        address: address,
        args: [
            functionName,
            args
        ],
    })

    return simulate;
}



