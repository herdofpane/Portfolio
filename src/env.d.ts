/// <reference path="../.astro/types.d.ts" />

declare global {
  interface Window {
    toggleTheme: () => void;
    showToast: (message: string) => void;
  }
}

export {};
