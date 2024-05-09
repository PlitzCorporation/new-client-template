/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5007',
        pathname: '/td/**',
      },
      {
        protocol: 'https',
        hostname: 'thedavid.plitz7.com',
      },
    ],
  },
};

export default nextConfig;
