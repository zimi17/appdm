
"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export interface FacetItem {
  name: string;
  value: string;
  number: string;
  items?: FacetItem[];
}

interface FacetItemProps {
  item: FacetItem;
  level: number;
  onFacetChanged: (item: FacetItem, checked: boolean) => void;
  selectedState: Record<string, boolean>;
}

const FacetItemComponent: React.FC<FacetItemProps> = ({ item, level, onFacetChanged, selectedState }) => {
  const [isOpen, setIsOpen] = useState(level < 2);
  const hasSubItems = item.items && item.items.length > 0;
  const isChecked = selectedState[item.value] || false;

  const handleCheckedChange = (checked: boolean) => {
    onFacetChanged(item, checked);
  };
  
  const content = (
     <div className="flex items-center space-x-2 py-2">
      <Checkbox
        id={`facet-${item.value}`}
        checked={isChecked}
        onCheckedChange={handleCheckedChange}
        aria-label={`Filter by ${item.name} ${item.number}`}
      />
      <label
        htmlFor={`facet-${item.value}`}
        className="flex-grow text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex justify-between items-center cursor-pointer"
      >
        <span>{item.name}</span>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">{item.number}</span>
          {hasSubItems && (
            <ChevronRight className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")} />
          )}
        </div>
      </label>
    </div>
  )

  if (hasSubItems) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
            <div className="w-full">
             {content}
            </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pl-6 border-l border-border ml-2">
            {item.items?.map((subItem) => (
              <FacetItemComponent key={subItem.value} item={subItem} level={level + 1} onFacetChanged={onFacetChanged} selectedState={selectedState} />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return content;
};


interface ArchivePageFacetsProps {
  title: string;
  items: FacetItem[];
  onFacetChanged: (item: FacetItem, checked: boolean) => void;
}

export function ArchivePageFacets({ title, items, onFacetChanged }: ArchivePageFacetsProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [selectedState, setSelectedState] = useState<Record<string, boolean>>({});

  const handleFacetChange = (item: FacetItem, checked: boolean) => {
    const newSelectedState = {...selectedState, [item.value]: checked};
    setSelectedState(newSelectedState);
    onFacetChanged(item, checked);
  };
  
  const itemsToShow = showAll ? items : items.slice(0, 5);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <fieldset>
            <CollapsibleTrigger className="w-full">
                <legend className="flex items-center justify-between w-full py-2 cursor-pointer">
                    <span className="text-lg font-bold">{title}</span>
                    <ChevronDown className={cn("h-5 w-5 transition-transform", !isOpen && "-rotate-90")} />
                </legend>
            </CollapsibleTrigger>
            <CollapsibleContent>
                {itemsToShow.map((item) => (
                    <FacetItemComponent key={item.value} item={item} level={1} onFacetChanged={handleFacetChange} selectedState={selectedState} />
                ))}
                {!showAll && items.length > 5 && (
                    <Button variant="link" onClick={() => setShowAll(true)} className="p-0 h-auto text-primary mt-2">More</Button>
                )}
            </CollapsibleContent>
        </fieldset>
    </Collapsible>
  );
}
