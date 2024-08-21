import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
});

export default nextConfig;
