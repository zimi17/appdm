
"use client";

import Link from "next/link";
import { ChevronLeft, ArrowRight } from "lucide-react";

interface MenuHeaderProps {
    parentItem: any;
    onBackClick: () => void;
}

export const MenuHeader = ({ parentItem, onBackClick }: MenuHeaderProps) => {
    return (
        <div className="nav-primary__subsec--top pt-[8px] mb-6 md:mb-[41px]">
            <div className="nav-primary__back mb-9">
                <button
                onClick={onBackClick}
                className="nav-primary__back-action bg-transparent border-0 text-white text-sm tracking-wider uppercase pt-0 pr-0 pb-0 pl-[26px] relative flex items-center font-medium"
                >
                <span className="icon bg-[#656f77] rounded-full text-white inline-block text-[11px] h-4 left-0 leading-[17px] absolute text-center w-4 top-0.5">
                    <ChevronLeft className="w-4 h-4" />
                </span>
                {parentItem.parentTitle || "Back"}
                </button>
            </div>
            {parentItem?.href ? (
                <Link href={parentItem.href} className="hover:underline group">
                <strong className="block font-bold text-xl tracking-[-0.1px] leading-normal flex items-center">
                    {parentItem?.title}
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </strong>
                </Link>
            ) : (
                <strong className="block font-bold text-xl tracking-[-0.1px] leading-normal">
                {parentItem?.title}
                </strong>
            )}
            {parentItem?.description && (
                <span className="block text-sm leading-normal mt-2 text-gray-400">
                {parentItem.description}
                </span>
            )}
        </div>
    )
}
