
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";
import { ReactNode } from "react";

interface CtaLinkProps extends ButtonProps {
    href: string;
    children: React.ReactNode;
}

export function CtaLink({ href, children, className, variant, ...props }: CtaLinkProps) {
    if (variant === 'link' || !variant) {
        let textContent: ReactNode = children;
        let lastWord: string | undefined;

        if (typeof children === 'string') {
            const words = children.split(' ');
            if (words.length > 1) {
                lastWord = words.pop();
                textContent = words.join(' ');
            }
        }
        
        return (
            <Link href={href} className={cn("font-bold self-start hover:underline group", className)}>
                <span className="flex items-center gap-2">
                    {textContent}
                    {lastWord && (
                        <span className="flex items-center gap-2">
                            {lastWord}
                            <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                        </span>
                    )}
                </span>
                {/* Fallback for single word or non-string children */}
                {!lastWord && typeof children === 'string' && (
                     <span className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                    </span>
                )}
            </Link>
        );
    }

    return (
        <Button asChild className={cn(className)} {...props}>
            <Link href={href}>
                {children}
            </Link>
        </Button>
    )
}
