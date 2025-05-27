import { Hex, hexToString, stringToHex } from "viem";
import { match} from "ts-pattern";

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

export function longStr(input: Hex | undefined){
    if (!input) return "";
    return hexToString(input);
}

export function shortHandError(error : any) {
    if (!error || typeof error !== 'object') {
        return "";
    }
    if (Object.prototype.hasOwnProperty.call(error, 'shortMessage')) {
        return error.shortMessage;
    }      
    return match(error)
        .when(e => e?.name === "InternalRpcError", () => "Internal RPC Error")
        .when(e => e?.name === "HttpRequestError", () => "HTTP Request Error")
        .when(e => e?.name === "LimitExceededRpcError", () => "Limit Exceeded RPC Error")
        .otherwise(() => error.name || "Unknown error");

}