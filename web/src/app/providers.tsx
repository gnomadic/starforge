'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '@/domain/WagmiConfig';
import { SupplyProvider } from '@/components/SupplyContext';
import { ScenarioProvider } from '@/components/ScenarioContext';
import { sdk } from '@farcaster/frame-sdk'


const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {

  React.useEffect(() => {
    const initializeSdk = async () => {
      await sdk.actions.ready();
    };
  
    if (queryClient) {
      initializeSdk();
    }
  }, [queryClient]);


  return (
    
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient} >
        <RainbowKitProvider>
          <ScenarioProvider>
            <SupplyProvider>
              {children}
            </SupplyProvider>
          </ScenarioProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
