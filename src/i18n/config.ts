export const locales = ["en", "bn", "ar", "ur"] as const;
export const defaultLocale: Locale = "en";
export type Locale = (typeof locales)[number];
