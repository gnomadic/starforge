'use client';

import { AirVent } from "lucide-react";


export default function PlayMenu() {

    return (
        <section>
            <footer className="flex flex-col items-center justify-center bg-black">
                <div className="grid grid-cols-4 gap-4">
                    <div className="bg-white/10 min-w-16 min-h-16 flex items-center justify-center">
                        <AirVent className="text-white" />
                    </div>
                    <div className="bg-white/10 min-w-16 min-h-16 flex items-center justify-center">
                        <AirVent className="text-white" />
                    </div>
                    <div className="bg-white/10 min-w-16 min-h-16 flex items-center justify-center">
                        <AirVent className="text-white" />
                    </div>
                    <div className="bg-white/10 min-w-16 min-h-16 flex items-center justify-center">
                        <AirVent className="text-white" />
                    </div>

                </div>

            </footer>
        </section>
    )

}
