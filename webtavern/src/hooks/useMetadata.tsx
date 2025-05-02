import { ComponentMetadata, GameSummary } from '@/domain/Domain';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export function useMetadata<T>(ipfs: string | undefined) {
  const fetcher = (url: string) => fetch(url).then(r => r.json())

  let url = `/api/ipfs/?ipfsURL=${ipfs}`
  // return useSWR<T>(url, fetcher);

  const { data: raw, error } = useSWR<T>(url, fetcher);
  let data = raw as T;
  return {
    data,
    error
  };
}


// export function fetcher2(...urls: string[]) {
//   console.log(urls);
//   const f = (u:any) => fetch(u).then((r) => r.json());

//   if (urls.length > 1) {
//     return Promise.all(urls.map(f));
//   }
//   return f(urls);
// }

// function fetcher3( ...ipfs: string[]) {
//   // const fetch = (url : string) => fetch(url).then(r => r.json());
//   const fetcher = (url: string) => fetch(url).then(r => r.json())


//   if (ipfs.length > 1) {
//     return Promise.all(ipfs.map(fetcher));
//   }
//   return fetcher(ipfs);
// }


const fetcher = (...urls: any[]) => {
  const f = (url: string | URL | Request) => fetch(url).then(r => r.json())
  return Promise.all(urls.map(url => f(url)))
}

export default function useMultipleRequests() {
  // let url = `/api/ipfs/?ipfsURL=${ipfs}`

  const urls = ['/api/ipfs/?ipfsURL=https://ipfs.io/ipfs/QmdW8chcERiTXdRAtmRn5VsAJqbNCtP34ZNiYMk6KMGLpQ/RewardERC20.json', '/api/ipfs/?ipfsURL=https://ipfs.io/ipfs/QmdW8chcERiTXdRAtmRn5VsAJqbNCtP34ZNiYMk6KMGLpQ/QueueSession.json']
  const { data, error } = useSWR(urls, fetcher)
  return {
    data: data,
    isError: !!error,
    isLoading: !data && !error
  }
}

export function useMetadataBatch(ipfs: string[]) {

  const [batch, setBatch] = useState<ComponentMetadata[]>([]);
  const [lastRun, setLastRun] = useState(0);

  useEffect(() => {
    async function fetchData() {
      if (ipfs && ipfs.length > lastRun) {
        setLastRun(ipfs.length);
        let promises = []

        for (let i = 0; i < ipfs.length; i++) {
          promises.push(((await fetch(ipfs[i])).json()));
        }
        console.log("promise: " + JSON.stringify(promises));
        let resp = await Promise.all(promises);
        console.log("data: " + JSON.stringify(resp));
        setBatch(resp);
      }
    }

    fetchData();
  }, [ipfs]);

  return { batch };


}


export function getMetadataURLsFromGame(game: GameSummary | undefined) : string[] {
  if (!game) {
    return [];
  }
  console.log("game: " + game.componentSummaries.length);
  let compMetadata: string[] = [];
  for (let i = 0; i < game.componentSummaries.length; i++) {
    compMetadata.push(game.componentSummaries[i].metadata);
  }
  console.log("done: " + compMetadata)
  return compMetadata;
}