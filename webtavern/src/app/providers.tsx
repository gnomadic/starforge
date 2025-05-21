'use client';

import * as React from 'react';
import {
  darkTheme,
  midnightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '@/domain/WagmiConfig';


const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient} >
        <RainbowKitProvider
        theme={midnightTheme()}>
          {children}
          </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
