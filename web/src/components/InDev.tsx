'use client';

import { Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function InDev() {


    useEffect(() => {
        toast.info('STARFORGE and the Tavern Protocol are in active development!  Everything will change and you will lose progress.')
        }, []);

        return (
            <></>
        );
    }
