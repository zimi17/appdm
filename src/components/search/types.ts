// File ini adalah placeholder untuk tipe data pencarian yang hilang.

// Tipe dasar untuk hasil pencarian
export interface ModernSearchHit {
  title: string;
  url?: string;
  autocomplete?: string;
  highlight?: {
    autocomplete?: string;
    title?: string;
  };
  display?: Display;
}

// Tipe untuk saran pencarian
export interface Suggestions {
  updatedSuggestions?: {
    total?: number;
    suggestions?: {
      groupName?: string;
      group?: {
        suggestion?: string;
        conceptUri?: string;
      }[];
    }[];
  };
}

// Tipe lain yang terkait dengan pencarian bisa ditambahkan di sini.
