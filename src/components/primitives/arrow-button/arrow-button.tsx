
'use client';
// Placeholder for ArrowButton component
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArrowButtonProps extends React.ComponentProps<typeof Button> {
    direction: 'left' | 'right';
}

export function ArrowButton({ direction, className, ...props }: ArrowButtonProps) {
    const Icon = direction === 'left' ? ArrowLeft : ArrowRight;
    return (
        <Button variant="ghost" size="icon" className={cn("rounded-full", className)} {...props}>
            <Icon className="h-6 w-6" />
        </Button>
    )
}
