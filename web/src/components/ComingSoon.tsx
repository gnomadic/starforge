'use client';

import { Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function ComingSoon() {

    return (
        <div>
            {/* <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 space-gradient flex flex-col items-center justify-center text-center"></div> */}
            <div className="max-w-2xl mx-auto">
                <div className="relative mb-8">
                    {/* <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/50 to-accent/50 blur-lg opacity-75 animate-pulse-slow"></div> */}
                    <h1 className="relative text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-6 z-10">
                        We are still working.
                    </h1>
                </div>

                <p className="text-lg md:text-xl text-white/80 mb-10">
                    Our team is getting user feedback to guide the development of the game. We are working hard to make it a reality.
                </p>

                <p className="text-lg md:text-xl text-white/80 mb-10">
                    We need you to help us make it better. Join our community and be part of the journey!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
                    <div className="bg-card/80 border border-white/10 rounded-xl p-6 backdrop-blur-sm flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                            <div className="w-8 h-8 text-primary" >
                                <MessageCircle className="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <h2 className="text-xl font-display font-bold mb-2 align-middle">Join Our Community</h2>
                        <p className="text-muted-foreground mb-4 text-center">Get exclusive updates and be the first to know about new releases.</p>
                        <Link href="https://t.me/+Js2_GaKRbkBkZGE5" target="_blank" rel="noopener noreferrer">
                            <Button>
                                Join our Telegram
                            </Button>
                        </Link>

                    </div>

                    <div className="bg-card/80 border border-white/10 rounded-xl p-6 backdrop-blur-sm flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                            <div className="w-8 h-8 text-primary" >
                                <Mail className="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <h2 className="text-xl font-display font-bold mb-2 text-center">Custom Game</h2>
                        <p className="text-muted-foreground mb-4 text-center">This game is built using the Tavern Framework.  Do you want to launch your own?</p>
                        <Link href='https://5gz89tb0qad.typeform.com/to/s9xvdSP3' target="_blank" rel="noopener noreferrer">
                            <Button>
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
