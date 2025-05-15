import { stringToHex } from "viem";

export function b32(input: string){
    return stringToHex(input, { size: 32 }) 
}