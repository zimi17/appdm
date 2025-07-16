/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_MAINTENANCE_MODE: string;
  // add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
