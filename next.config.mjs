/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "takaoriginal.com" },
      { protocol: "https", hostname: "cdn.meideinthe.cloud" },
    ],
  },
};

export default nextConfig;
