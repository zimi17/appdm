import React from 'react';
import { icons } from 'lucide-react';

// Komponen Icon sederhana ini mengambil nama ikon dari lucide-react
// dan merendernya. Ini adalah pengganti untuk dependensi 'design-system' yang hilang.

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, color, size, ...props }) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" tidak ditemukan di lucide-react`);
    return null; // atau render ikon default
  }

  return <LucideIcon color={color} size={size} {...props} />;
};
