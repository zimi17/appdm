"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface AlphabeticalPickerProps {
  availableLetters: string[];
  onLetterSelect: (letter: string | null) => void;
}

export function AlphabeticalPicker({ availableLetters, onLetterSelect }: AlphabeticalPickerProps) {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleLetterClick = (letter: string) => {
    if (!availableLetters.includes(letter)) return;
    
    const newSelectedLetter = selectedLetter === letter ? null : letter;
    setSelectedLetter(newSelectedLetter);
    onLetterSelect(newSelectedLetter);
  };

  return (
    <div className="flex flex-wrap gap-1 bg-muted p-2 rounded-md">
      {alphabet.map((letter) => {
        const isAvailable = availableLetters.includes(letter);
        return (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            disabled={!isAvailable}
            className={cn(
              "flex-1 text-center font-bold p-2 rounded-sm text-sm transition-colors",
              isAvailable 
                ? "text-foreground hover:bg-accent cursor-pointer" 
                : "text-muted-foreground/50 cursor-not-allowed",
              selectedLetter === letter && "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
