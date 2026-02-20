export {}; // Make it a module to avoid global scope issues

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
