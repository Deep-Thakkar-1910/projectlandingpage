/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "takaoriginal.com" }],
  },
};

export default nextConfig;
