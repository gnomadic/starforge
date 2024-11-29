import { Abi } from 'viem';
import dailyInteractionModule from './raw/DailyInteractionModule.json'
import entityFactory from "./raw/EntityFactory.json"


const playSet: Abi[] = [
    dailyInteractionModule.abi as Abi,
    entityFactory.abi as Abi
]


export function findABI(functionName: string): Abi {

    const found = playSet
        .find(abi => { return abi.find(item => item.type === 'function' && item.name === functionName) })
        ?.find(item => {
            return item.type === 'function' && item.name === functionName
        })

    return [found!]
}
