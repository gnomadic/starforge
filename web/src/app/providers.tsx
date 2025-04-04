'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '@/domain/WagmiConfig';
import { SupplyProvider } from '@/components/SupplyContext';
// import { SupplyProvider } from '@/components/SupplyProvider';


const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient} >
        <RainbowKitProvider>
        <SupplyProvider>

          {children}
          </SupplyProvider>
          </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
