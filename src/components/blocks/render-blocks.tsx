
'use client';

import React from 'react';
import { HeroSection } from './hero-section/hero-section';
import { TwoColumnContent } from './two-column-content/two-column-content';
import { CardGrid } from './card-grid/card-grid';
import { AccordionSection } from './accordion-section/accordion-section';
import { PromoBar } from './promo-bar/promo-bar';
import { urlFor } from '@/lib/sanity-client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const blockComponents: { [key: string]: React.ComponentType<any> } = {
  hero: HeroSection,
  twoColumnContent: TwoColumnContent,
  cardGrid: CardGrid,
  accordionSection: AccordionSection,
  promoBar: PromoBar,
};

// Helper function to process block data, especially image URLs
const processBlockData = (block: any) => {
  if (block.image) {
    block.imageUrl = urlFor(block.image as SanityImageSource).url();
    block.imageHint = block.image.hint;
  }
  if (block.items) {
    block.items = block.items.map((item: any) => {
        if (item.image) {
            return {
                ...item,
                image: urlFor(item.image as SanityImageSource).width(768).height(576).url(),
                hint: item.image.hint,
            }
        }
        // Add an 'id' to accordion items if it's missing, for the key
        if(block._type === 'accordionSection' && !item.id) {
            return {...item, id: item._key || item.title}
        }
        return item;
    });
  }
  return block;
};

export const RenderBlocks = ({ blocks }: { blocks: any[] }) => {
  if (!blocks || blocks.length === 0) {
    return <p className="text-center py-12">Tidak ada konten untuk halaman ini.</p>;
  }

  return (
    <>
      {blocks.map((block) => {
        const Component = blockComponents[block._type];
        if (!Component) {
          console.warn(`Component for block type "${block._type}" not found.`);
          return (
            <div key={block._key} className="bg-red-100 p-4 my-2">
              <p>Unknown block type: {block._type}</p>
              <pre>{JSON.stringify(block, null, 2)}</pre>
            </div>
          );
        }
        const processedProps = processBlockData({ ...block });
        return <Component key={block._key} {...processedProps} />;
      })}
    </>
  );
};
