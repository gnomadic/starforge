'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { sdk } from '@farcaster/frame-sdk'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect } from 'wagmi'
import { Button } from './ui/button';


export default function WalletButton() {

    const [isMiniApp, setIsMiniApp] = useState(false);

    useEffect(() => {
        const checkMiniApp = async () => {
            const isMiniApp = await sdk.isInMiniApp();
            setIsMiniApp(isMiniApp);
            // You can handle `isMiniApp` here if needed
        };

        checkMiniApp();
    }, []);

    const { isConnected, address } = useAccount()
    const { connect, connectors } = useConnect()


    return (
        <>
            {isMiniApp ? (
                isConnected ? (
                    <div>
                        {/* Content for connected state */}
                        connected: {address ? `${address.slice(0, 4)}...${address.slice(-4)}` : ''}
                    </div>
                    // <div>
                        
                 
                    // </div>
                ) : (
                    <Button
                    onClick={() => connect({ connector: connectors[0] })}
                >
                    Connect
                </Button>
                )
            ) : (
                <ConnectButton
                    chainStatus='icon'
                    accountStatus='avatar'
                    showBalance={false}
                />
            )}
        </>
    );
}
