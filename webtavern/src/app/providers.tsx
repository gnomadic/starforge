'use client';

import * as React from 'react';
import {
  darkTheme,
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
        theme={darkTheme({
          
          accentColor: '#FF8C00',
          accentColorForeground: 'white',
          fontStack: 'rounded',
          overlayBlur: 'large',
          borderRadius: 'small',
        })}>
          {children}
          </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
