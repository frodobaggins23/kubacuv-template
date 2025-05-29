export const getAppMessage = (): string => {
  // Ensure VITE_MESSAGE is treated as a string, even if it's not set during build time by Vite
  // (which might be the case in a pure Node test environment if not properly polyfilled by Vitest/Vite)
  const message = (import.meta.env as any).VITE_MESSAGE;
  return message ?? "Fill in .env.VITE_MESSAGE";
};
