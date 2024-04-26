/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ["cs", "en", "pl"],
    defaultLocale: "cs",
    localeDetection: true,
  },
};

module.exports = nextConfig;
