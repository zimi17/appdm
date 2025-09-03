'use client';

import { cn } from '@/lib/utils';

interface AlphabeticalPickerProps {
  availableLetters: string[];
  onLetterSelect: (letter: string | null) => void;
  selectedLetter?: string | null;
  className?: string;
}

export function AlphabeticalPicker({ 
  availableLetters, 
  onLetterSelect, 
  selectedLetter, 
  className 
}: AlphabeticalPickerProps) {
  const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="font-headline text-lg font-semibold">Filter by Letter</h3>
      <div className="grid grid-cols-7 gap-1">
        {allLetters.map((letter) => {
          const isAvailable = availableLetters.includes(letter);
          const isSelected = selectedLetter === letter;
          
          return (
            <button
              key={letter}
              onClick={() => onLetterSelect(isSelected ? null : letter)}
              disabled={!isAvailable}
              className={cn(
                "px-2 py-1 text-xs font-medium rounded transition-colors",
                isAvailable
                  ? "hover:bg-primary hover:text-primary-foreground cursor-pointer"
                  : "text-muted-foreground cursor-not-allowed opacity-50",
                isSelected && isAvailable && "bg-primary text-primary-foreground"
              )}
            >
              {letter}
            </button>
          );
        })}
      </div>
      {selectedLetter && (
        <button
          onClick={() => onLetterSelect(null)}
          className="text-sm text-primary hover:underline"
        >
          Clear filter
        </button>
      )}
    </div>
  );
}
