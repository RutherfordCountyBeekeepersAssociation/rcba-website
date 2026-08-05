/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SQUARE_NEW_MEMBER_URL: string;
  readonly VITE_SQUARE_RENEWAL_URL: string;
  readonly VITE_SQUARE_DONATION_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

