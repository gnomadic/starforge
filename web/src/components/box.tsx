import { cn } from '@/lib/utils';
import React from 'react';


const Box: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return (
        <div className={cn('border-black border-2', className)}>
            {children}
        </div>
    );
};

export default Box;