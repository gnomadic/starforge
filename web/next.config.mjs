/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ipfs.io',
            port: '',
            pathname: '**',
          },
        ],
      },
      reactStrictMode: true,
      webpack: config => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        return config;
      },
};

export default nextConfig;
