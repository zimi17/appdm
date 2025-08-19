
'use client';

import * as React from "react";
import { useEffect, useState, CSSProperties, useRef } from "react";
import './keyword-scroll-lists.css';

interface KeywordProps {
  label: string;
}

interface KeywordScrollListProps {
  keywords: Array<KeywordProps>;
}

export function KeywordScrollLists({ keywords }: KeywordScrollListProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [sortedKeywords, setSortedKeywords] = useState<KeywordProps[]>([]);

  useEffect(() => {
    setSortedKeywords([...keywords].sort(() => Math.random() - 0.5));
  }, [keywords]);

  const rows = React.useMemo(() => {
    if (sortedKeywords.length === 0) return [];
    const newRows: Array<Array<KeywordProps>> = [];
    const numRows = 3;
    const baseWordsPerRow = Math.floor(sortedKeywords.length / numRows);
    const extraWords = sortedKeywords.length % numRows;
    let currentIndex = 0;

    for (let i = 0; i < numRows; i++) {
        let wordsForThisRow = baseWordsPerRow + (i < extraWords ? 1 : 0);
        const end = currentIndex + wordsForThisRow;
        const rowKeywords = sortedKeywords.slice(currentIndex, end);
        
        while(rowKeywords.map(k => k.label).join(' / ').length < 150 && sortedKeywords.length > 0) {
            rowKeywords.push(...rowKeywords.slice(0, wordsForThisRow));
        }

        newRows.push(rowKeywords);
        currentIndex = end;
    }

    return newRows;
  }, [sortedKeywords]);


  function updateVariables() {
    if (ref.current) {
      const elBoundingBox = ref.current.getBoundingClientRect();
      const elHeight = elBoundingBox.height;
      const windowHeight = window.innerHeight;
      const elTop = elBoundingBox.top;
      const speedControl = 0.65;

      if (elTop - windowHeight <= 0 && elTop + elHeight > 0) {
        setScrollPercentage(
          (1 - (elTop + elHeight) / (elHeight + windowHeight)) * speedControl,
        );
        setWindowWidth(window.innerWidth);
      }
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (prefersReducedMotion?.matches === true) {
      return;
    }
    
    updateVariables();
    
    const onScroll = () => updateVariables();
    const onResize = () => updateVariables();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className="keyword-scroll-list-container"
      data-chromatic="ignore"
      style={
        {
          "--keyword-scroll-offset": scrollPercentage,
          "--window-width": `${windowWidth}px`,
        } as CSSProperties
      }
      ref={ref}
    >
      <div className="keyword-scroll-list" aria-hidden="true">
        {rows.map((row, index) => (
          <p className="keyword-scroll-list__row" key={index}>
            {row.map((keyword, i) => (
              <span
                key={i}
                className="keyword-scroll-list__keyword"
              >
                {keyword.label}
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}
