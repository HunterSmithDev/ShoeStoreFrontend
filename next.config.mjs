/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static.nike.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'images.vans.com',
            port: '',
          }
        ],
      },

};

export default nextConfig;
