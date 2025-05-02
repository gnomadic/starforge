import { createFrames } from "frames.js/next";
import { farcasterHubContext } from "frames.js/middleware";

// const baseUrl =  "http://localhost:3000";


// TODO Collecting page data  ..Error: Invalid baseUrl: Invalid URL if this is loaded dynamically? 
export const CHAIN_ID = "84532";


export const getBaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://playtavern.com";
  }
  return "http://localhost:3000";

}


export const frames = createFrames({
  basePath: "/farcade",
  baseUrl: getBaseUrl(),
  middleware: [farcasterHubContext()],
  

});