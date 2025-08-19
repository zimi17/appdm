
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

interface CtaLinkProps extends ButtonProps {
    href: string;
    children: React.ReactNode;
}

export function CtaLink({ href, children, className, variant, ...props }: CtaLinkProps) {
    if(variant === 'link' || !variant) {
        return (
            <Link href={href} className={cn("font-bold self-start hover:underline group flex items-center gap-2", className)}>
                {children}
                <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </Link>
        )
    }

    return (
        <Button asChild className={cn(className)} {...props}>
            <Link href={href}>
                {children}
            </Link>
        </Button>
    )
}
