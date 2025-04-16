import { NextRequest, NextResponse } from 'next/server';
const pinataSDK = require('@pinata/sdk');

type Params = {
  ipfsURL: string
}

const IPFS_READ_BASE = "https://ipfs.io/ipfs/"

export async function GET(request: NextRequest, context: { params: Params }) {
  const url = request.nextUrl.searchParams.get('ipfsURL');

  console.log("server requesting url: ", url)
  if (!url || url === "undefined") {
    return NextResponse.json({"error": "no url provided"});
    
  }
  console.log('fetching: ', url)
  const res = await fetch(IPFS_READ_BASE + url as string);
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
    // return NextResponse.error()
  }

  const json = await res.json();
  return NextResponse.json(json)
}

export async function POST(request: NextRequest, context: { params: Params }) {
  const pinata = new pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

  const input = await request.json()

  const payload = {
    name: input.name,
    description: input.description,
    gameUrl: input.gameUrl
  };

  const options = {
    pinataMetadata: {
      name: payload.name.length > 0 ? payload.name : "Empty Game Metadata",
    },
    pinataOptions: {
      cidVersion: 0
    }
  };
  const res = await pinata.pinJSONToIPFS(payload, options)
  
  return NextResponse.json(res)

}


