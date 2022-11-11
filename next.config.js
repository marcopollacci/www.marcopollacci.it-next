/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["wakatime.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});

module.exports = nextConfig;
