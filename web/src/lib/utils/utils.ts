import { Hex, hexToString, stringToHex } from "viem";

export function b32(input: string){
    // return stringToHex(input, { size: 32 }) 
    return stringToHex(input) 
}

export function safeb32(input: string){
    return stringToHex(input, { size: 32 }) 
}

export function str(input: Hex | undefined){
    if (!input) return "";
    return hexToString(input, { size: 32 });
}