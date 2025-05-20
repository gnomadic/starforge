'use client';

import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function InDev() {
    useEffect(() => {
        toast.info("We are in active development!  Don't get attached to any progress, and join our telegram to share feedback and guide development!")
        }, []);

        return (
            <></>
        );
    }
