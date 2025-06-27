/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add other Next.js configurations here
  // For example, to allow images from external domains:
  images: {
    domains: ['example.com'], // Replace with your image domains
  },
  // For monorepo setup with pnpm workspaces, ensure transpilation if needed
  transpilePackages: ['@ai-connect-hub/shared-ui'], // Example if you had a shared UI package
};

export default nextConfig;
