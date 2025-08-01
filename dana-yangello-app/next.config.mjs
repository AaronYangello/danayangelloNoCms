import { defineConfig } from 'next'

/** @type {import('next').NextConfig} */
export default defineConfig({
  reactStrictMode: true,
  swcMinify: true,

  // opt into the new App Router and server‐action support
  experimental: {
    appDir: true,
    serverActions: true,
  },

  // you can still define any rewrites / redirects here
  // rewrites: async () => [ ... ],
})