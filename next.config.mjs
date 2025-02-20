/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', '@react-three/drei'],
  images: {
    domains: ['landingfoliocom.imgix.net'],
  },
};

export default nextConfig;
